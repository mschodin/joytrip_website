import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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

function buildPhoto(name, alt) {
  const entry = imageManifest[name];
  if (!entry) {
    console.warn('[gallery] imageManifest entry not found:', name);
    return null;
  }
  const jpgs = entry.jpg;
  const widths = entry.widths;
  const largestJpg = jpgs[jpgs.length - 1];
  const naturalW = entry.naturalWidth;
  const naturalH = entry.naturalHeight;
  const aspectRatio = naturalW / naturalH;

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
// ---------------------------------------------------------------------------
const PHOTOS = [
  buildPhoto('live-little-bear',             "Live at Little Bear Saloon"),
  buildPhoto('cornfield-looking-at-camera',  "Band in the cornfield"),
  buildPhoto('greenroom-swirl',              "Greenroom"),
  buildPhoto('garcias-live',                 "Live at Garcia's"),
  buildPhoto('garcias-eddie-yell',           "Eddie on the mic at Garcia's"),
  buildPhoto('garcias-crowd',                "Garcia's crowd"),
  buildPhoto('eddie-bennett-garcias',        "Eddie and Bennett at Garcia's"),
  buildPhoto('acoustic-tracking',            "Acoustic tracking session"),
  buildPhoto('studio-trio',                  "Studio trio"),
  buildPhoto('skylark-live',                 "Skylark Lounge"),
  buildPhoto('garcias-swirl',                "Garcia's"),
].filter(Boolean);

const LIGHTBOX_SLIDES = PHOTOS.map((p) => ({ src: p.src }));

// ---------------------------------------------------------------------------
// Videos
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
// Animation variants
// ---------------------------------------------------------------------------

const bentoContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const bentoCellVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Gallery() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const prefersReducedMotion = useReducedMotion();

  function openLightbox(index) {
    setLightbox({ open: true, index });
  }

  function closeLightbox() {
    setLightbox((prev) => ({ ...prev, open: false }));
  }

  // Split videos: first is featured, rest go in the grid
  const featuredVideo = VIDEOS[0];
  const remainingVideos = VIDEOS.slice(1);

  // Hover props for bento cells (disabled if reduced motion)
  const cellHover = prefersReducedMotion
    ? {}
    : {
        whileHover: {
          scale: 1.02,
          rotate: 0.8,
          transition: { duration: 0.3, ease: 'easeOut' },
        },
      };

  return (
    <section className="gallery-section" id="section-gallery" aria-label="Gallery">
      {/* Section header */}
      <Reveal delay={0}>
        <p className="eyebrow gallery-eyebrow" aria-hidden="true">GALLERY</p>
        <h2 className="gallery-heading">Live &amp; lens</h2>
        <p className="gallery-tagline">
          3 years of music, road trips, and late nights.
        </p>
      </Reveal>

      {/* ── Featured video (hero, full width) ── */}
      <Reveal delay={0.1}>
        <div className="gallery-featured-video">
          <div className="gallery-video-aspect">
            <iframe
              src={featuredVideo.src}
              title={featuredVideo.title}
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Reveal>

      {/* ── Remaining videos grid ── */}
      <div className="gallery-videos-grid">
        {remainingVideos.map((video, i) => (
          <Reveal key={video.src} delay={0.1 + i * 0.08}>
            <div className="gallery-video-card">
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
            </div>
          </Reveal>
        ))}
      </div>

      {/* ── Bento photo grid ── */}
      <motion.div
        className="gallery-bento"
        variants={prefersReducedMotion ? {} : bentoContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={photo.src}
            className="gallery-bento-cell"
            variants={prefersReducedMotion ? {} : bentoCellVariants}
            {...cellHover}
            onClick={() => openLightbox(i)}
            role="button"
            tabIndex={0}
            aria-label={`View ${photo.alt}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(i);
              }
            }}
          >
            <img
              src={photo.src}
              srcSet={photo.srcSet
                ?.map((s) => `${s.src} ${s.width}w`)
                .join(', ')}
              sizes="(max-width: 768px) 50vw, 25vw"
              alt={photo.alt}
              loading="lazy"
            />
            <div className="gallery-bento-grain" aria-hidden="true" />
          </motion.div>
        ))}
      </motion.div>

      {/* ── Lightbox ── */}
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
