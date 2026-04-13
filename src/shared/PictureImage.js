/**
 * PictureImage.js — Responsive <picture> component backed by the image manifest.
 *
 * Renders a modern <picture> element with AVIF, WebP, and JPG sources,
 * giving browsers the best format they support while falling back gracefully.
 *
 * Usage:
 *   <PictureImage
 *     name="joytrip-sunrise-photo"
 *     alt="Sunrise over the horizon"
 *     sizes="(max-width: 768px) 100vw, 1200px"
 *     className="hero-image"
 *     loading="lazy"
 *     width={2629}
 *     height={1497}
 *   />
 *
 * Props:
 *   name       {string}  — key from imageManifest (filename without extension)
 *   alt        {string}  — accessible alt text (required)
 *   sizes      {string}  — HTML sizes attribute for responsive images (default "100vw")
 *   className  {string}  — applied to the inner <img>
 *   loading    {string}  — "lazy" | "eager" (default "lazy")
 *   width      {number}  — intrinsic width for layout stability (optional)
 *   height     {number}  — intrinsic height for layout stability (optional)
 */

import React from 'react';
import { imageManifest } from './imageManifest';

export default function PictureImage({
  name,
  alt = '',
  sizes = '100vw',
  className,
  loading = 'lazy',
  fetchpriority,
  width,
  height,
  style,
}) {
  const entry = imageManifest[name];

  if (!entry) {
    console.warn(`[PictureImage] missing manifest entry: ${name}`);
    return null;
  }

  const { avif, webp, jpg, widths } = entry;

  /**
   * Build a srcSet string from an array of paths and corresponding widths.
   * e.g. "/path/img-640.avif 640w, /path/img-1024.avif 1024w"
   */
  function buildSrcSet(paths) {
    return paths.map((p, i) => `${p} ${widths[i]}w`).join(', ');
  }

  // Fallback src: largest JPG
  const fallbackSrc = jpg[jpg.length - 1];

  return (
    <picture>
      {/* AVIF — best compression, modern browsers */}
      <source
        type="image/avif"
        srcSet={buildSrcSet(avif)}
        sizes={sizes}
      />
      {/* WebP — broad support, good compression */}
      <source
        type="image/webp"
        srcSet={buildSrcSet(webp)}
        sizes={sizes}
      />
      {/* JPG — universal fallback */}
      <source
        type="image/jpeg"
        srcSet={buildSrcSet(jpg)}
        sizes={sizes}
      />
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchpriority}
        decoding="async"
        width={width}
        height={height}
        style={style}
      />
    </picture>
  );
}
