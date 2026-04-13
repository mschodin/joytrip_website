import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import Reveal from '../../shared/Reveal';
import { imageManifest } from '../../shared/imageManifest';

import './Gallery.css';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Build a react-photo-album v2 photo entry from an imageManifest entry.
 * @param {string} name  - key in imageManifest
 * @param {string} alt   - accessible description
 * @returns {{ src, width, height, srcSet, alt }}
 */
function buildPhoto(name, alt) {
  const entry = imageManifest[name];
  if (!entry) {
    console.warn('[gallery] imageManifest entry not found:', name);
    return null;
  }
  const jpgs = entry.jpg;
  const widths = entry.widths;

  // Use the largest jpg as the primary src
  const largestJpg = jpgs[jpgs.length - 1];
  const naturalW = entry.naturalWidth;
  const naturalH = entry.naturalHeight;

  // Compute displayed height proportional to naturalWidth/naturalHeight
  const aspectRatio = naturalW / naturalH;

  // srcSet: map each variant to { src, width, height }
  const srcSet = jpgs.map((src, i) => {
    const w = widths[i];
    return { src, width: w, height: Math.round(w / aspectRatio) };
  });

  return {
    src: largestJpg,
    width: naturalW,
    height: naturalH,
    srcSet,
    alt,
  };
}

// ---------------------------------------------------------------------------
// Photo data
// PHOTO SWAP: edit the list below to add/remove gallery photos.
// Photo names must exist in src/shared/imageManifest.js (run `npm run images` after dropping new files in src/Assets/raw/).
// ---------------------------------------------------------------------------
const PHOTOS = [
  buildPhoto('joytrip-sunrise-photo', 'Joytrip at sunrise'),
  buildPhoto('joytrip-sunset-photo', 'Joytrip at sunset'),
  buildPhoto('lauderdale-sunrise-corn', 'Sunrise over Lauderdale Lakes cornfields'),
  buildPhoto('vue-full-band', 'Joytrip full band at Vue'),
].filter(Boolean);

// Lightbox slides: one { src } entry per photo using the largest jpg
const LIGHTBOX_SLIDES = PHOTOS.map((p) => ({ src: p.src }));

// ---------------------------------------------------------------------------
// Videos — add or reorder entries here; each object needs { src, title }.
// VIDEO SWAP: update src URLs below to change which videos are embedded.
// ---------------------------------------------------------------------------
const VIDEOS = [
  {
    src: 'https://www.youtube.com/embed/3YwJliPGS30?si=ZYD3hEKrchT-lJSo',
    title: 'Joytrip live performance',
  },
  {
    src: 'https://www.youtube.com/embed/yeHzWOpS4-k?si=W0ESXKzee8KQx7Lb',
    title: 'Joytrip live performance',
  },
  {
    src: 'https://www.youtube.com/embed/a0Tt__KUB74',
    title: 'Joytrip live performance',
  },
  {
    src: 'https://www.youtube.com/embed/iCrQIF3ZxAU',
    title: 'Joytrip live performance',
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Gallery() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  function openLightbox(index) {
    setLightbox({ open: true, index });
  }

  function closeLightbox() {
    setLightbox((prev) => ({ ...prev, open: false }));
  }

  return (
    <section className="gallery-section" id="section-gallery" aria-label="Gallery">
      {/* Section header */}
      <Reveal delay={0}>
        <p className="eyebrow gallery-eyebrow" aria-hidden="true">GALLERY</p>
        <h2 className="gallery-heading">Live &amp; lens</h2>
      </Reveal>

      {/* ---------------------------------------------------------------- */}
      {/* Videos block                                                      */}
      {/* ---------------------------------------------------------------- */}
      <div className="gallery-videos">
        {VIDEOS.map((video, i) => (
          <Reveal key={video.src} delay={0.1 + i * 0.1} className="gallery-video-wrap">
            <div className="gallery-video-aspect">
              <iframe
                src={video.src}
                title={video.title}
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Reveal>
        ))}
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Photo grid                                                        */}
      {/* ---------------------------------------------------------------- */}
      <Reveal delay={0.2} className="gallery-grid-wrap">
        <PhotoAlbum
          layout="rows"
          photos={PHOTOS}
          targetRowHeight={280}
          spacing={8}
          onClick={({ index }) => openLightbox(index)}
        />
      </Reveal>

      {/* ---------------------------------------------------------------- */}
      {/* Lightbox                                                          */}
      {/* ---------------------------------------------------------------- */}
      <Lightbox
        open={lightbox.open}
        close={closeLightbox}
        index={lightbox.index}
        slides={LIGHTBOX_SLIDES}
        on={{
          view: ({ index: currentIndex }) =>
            setLightbox((prev) => ({ ...prev, index: currentIndex })),
        }}
        plugins={[Counter, Thumbnails]}
      />
    </section>
  );
}

/*
SMOKE-IMPORTS:
- Reveal
- imageManifest
*/
