/**
 * build-images.mjs — Image optimization pipeline for the Joytrip website.
 *
 * WHAT THIS SCRIPT DOES
 * ─────────────────────
 * This script takes the original, high-resolution photos stored in
 * src/Assets/raw/ and automatically produces optimized, web-ready versions
 * in several modern formats (AVIF, WebP, and JPG) at multiple sizes.
 * It also generates a JavaScript manifest file that React uses to import
 * the right image at the right size for every visitor's screen.
 *
 * WHY THIS MATTERS
 * ────────────────
 * Modern websites serve different image sizes to phones vs. desktop monitors.
 * AVIF and WebP are next-generation formats that look just as good as JPG
 * but are often 50–80% smaller — meaning faster page loads for fans.
 *
 * HOW TO ADD A NEW PHOTO
 * ──────────────────────
 * 1. Drop your photo (JPG, JPEG, or PNG) into: src/Assets/raw/
 * 2. Name it with lowercase letters and hyphens, e.g. "joytrip-stage-photo.jpg"
 * 3. Run the command: npm run images
 * 4. Commit the optimized outputs from src/Assets/optimized/ and the
 *    updated src/shared/imageManifest.js file.
 *
 * That's it! The website will automatically use the optimized versions.
 *
 * COMMAND TO RUN
 * ──────────────
 * npm run images
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
const RAW_DIR = path.join(ROOT, 'src', 'Assets', 'raw');
const OUT_DIR = path.join(ROOT, 'src', 'Assets', 'optimized');
const MANIFEST_PATH = path.join(ROOT, 'src', 'shared', 'imageManifest.js');

const TARGET_WIDTHS = [640, 1024, 1600, 2400];
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 80;
const AVIF_QUALITY = 60;

const SUPPORTED_EXTS = new Set(['.jpg', '.jpeg', '.png']);

/**
 * Convert a filename (without extension) to a camelCase JS identifier.
 * e.g. "joytrip-sunrise-photo" → "joytripSunrisePhoto"
 */
function toCamelCase(str) {
  return str.replace(/-([a-z0-9])/gi, (_, char) => char.toUpperCase());
}

async function main() {
  // Ensure output directory exists
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Collect source images
  const allFiles = fs.readdirSync(RAW_DIR);
  const sourceFiles = allFiles.filter(f => {
    const ext = path.extname(f).toLowerCase();
    return SUPPORTED_EXTS.has(ext) && f !== '.gitkeep';
  });

  if (sourceFiles.length === 0) {
    console.log('[image-manifest] No source images found in', RAW_DIR);
    process.exit(0);
  }

  let totalVariants = 0;
  // { basename: { avif: [...paths], webp: [...paths], jpg: [...paths], widths: [], naturalWidth, naturalHeight } }
  const manifestData = {};

  for (const file of sourceFiles) {
    const srcPath = path.join(RAW_DIR, file);
    const ext = path.extname(file).toLowerCase();
    const basename = path.basename(file, ext);

    // Get image metadata
    const meta = await sharp(srcPath).metadata();
    const naturalWidth = meta.width;
    const naturalHeight = meta.height;

    const avifPaths = [];
    const webpPaths = [];
    const jpgPaths = [];
    const usedWidths = [];

    // Determine which widths to emit. If the image is smaller than every target
    // width we still need at least one variant so PictureImage has a valid src.
    const widthsToProcess = TARGET_WIDTHS.filter(w => w <= naturalWidth);
    if (widthsToProcess.length === 0) {
      widthsToProcess.push(naturalWidth);
    }

    for (const width of widthsToProcess) {
      usedWidths.push(width);

      const avifName = `${basename}-${width}.avif`;
      const webpName = `${basename}-${width}.webp`;
      const jpgName  = `${basename}-${width}.jpg`;

      const avifOut = path.join(OUT_DIR, avifName);
      const webpOut = path.join(OUT_DIR, webpName);
      const jpgOut  = path.join(OUT_DIR, jpgName);

      const resized = sharp(srcPath)
        .rotate()                              // auto-orient from EXIF, then strip
        .resize({ width, withoutEnlargement: true })
        .withMetadata(false); // Strip EXIF

      // AVIF
      await resized.clone().avif({ quality: AVIF_QUALITY }).toFile(avifOut);

      // WebP
      await resized.clone().webp({ quality: WEBP_QUALITY }).toFile(webpOut);

      // JPG
      await resized.clone().jpeg({ quality: JPEG_QUALITY }).toFile(jpgOut);

      avifPaths.push(`../Assets/optimized/${avifName}`);
      webpPaths.push(`../Assets/optimized/${webpName}`);
      jpgPaths.push(`../Assets/optimized/${jpgName}`);

      totalVariants += 3;
    }

    manifestData[basename] = {
      avif: avifPaths,
      webp: webpPaths,
      jpg: jpgPaths,
      widths: usedWidths,
      naturalWidth,
      naturalHeight,
    };

    console.log(`[image-manifest] processed ${basename} (${naturalWidth}x${naturalHeight}) → ${usedWidths.length} sizes`);
  }

  // Generate imageManifest.js with proper import statements for CRA/webpack
  const lines = [];
  lines.push('// AUTO-GENERATED by scripts/build-images.mjs — do not edit by hand.');
  lines.push('// Run `npm run images` to regenerate after adding new photos.');
  lines.push('');

  // Emit import statements
  for (const [basename, data] of Object.entries(manifestData)) {
    const camel = toCamelCase(basename);
    for (let i = 0; i < data.widths.length; i++) {
      const w = data.widths[i];
      lines.push(`import ${camel}${w}Avif from '${data.avif[i]}';`);
      lines.push(`import ${camel}${w}Webp from '${data.webp[i]}';`);
      lines.push(`import ${camel}${w}Jpg  from '${data.jpg[i]}';`);
    }
  }

  lines.push('');
  lines.push('export const imageManifest = Object.freeze({');

  for (const [basename, data] of Object.entries(manifestData)) {
    const camel = toCamelCase(basename);
    lines.push(`  '${basename}': {`);
    lines.push(`    avif: [${data.widths.map(w => `${camel}${w}Avif`).join(', ')}],`);
    lines.push(`    webp: [${data.widths.map(w => `${camel}${w}Webp`).join(', ')}],`);
    lines.push(`    jpg:  [${data.widths.map(w => `${camel}${w}Jpg`).join(', ')}],`);
    lines.push(`    widths: [${data.widths.join(', ')}],`);
    lines.push(`    naturalWidth: ${data.naturalWidth},`);
    lines.push(`    naturalHeight: ${data.naturalHeight},`);
    lines.push(`  },`);
  }

  lines.push('});');
  lines.push('');

  fs.writeFileSync(MANIFEST_PATH, lines.join('\n'), 'utf8');

  console.log(
    `[image-manifest] processed ${sourceFiles.length} source images, ` +
    `emitted ${totalVariants} variants, manifest written to ${MANIFEST_PATH}`
  );
}

main().catch(err => {
  console.error('[image-manifest] ERROR:', err);
  process.exit(1);
});
