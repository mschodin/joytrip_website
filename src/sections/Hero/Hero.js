/**
 * Hero.js — Full-bleed editorial hero for the Joytrip website.
 *
 * Introduces the band and teases the upcoming second EP with a
 * typography-forward layout layered over a parallax background photo.
 *
 * Layer order (bottom → top):
 *   1. Background photo wrapped in <Parallax>
 *   2. Warm sepia overlay (--color-overlay-warm)
 *   3. Gradient overlay at the bottom for text legibility
 *   4. Grain texture overlay
 *   5. Content (eyebrow, band name, pull quotes, CTA)
 */

import React from 'react';

import PictureImage from '../../shared/PictureImage';
import Parallax from '../../shared/Parallax';
import Reveal from '../../shared/Reveal';
import {
  HERO_BAND_NAME,
  HERO_EYEBROW,
  HERO_QUOTES,
  HERO_CTA_LABEL,
  HERO_CTA_SPOTIFY_URL,
} from './copy';

import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-label="Joytrip — second EP coming soon">
      {/* ── Layer 1: Background photo with parallax ── */}
      <div className="hero-bg" aria-hidden="true">
        <Parallax offset={30}>
          <PictureImage
            name="lauderdale-sunrise-corn"
            alt=""
            sizes="100vw"
            className="hero-photo"
            loading="eager"
            fetchpriority="high"
          />
        </Parallax>
      </div>

      {/* ── Layer 2: Warm sepia overlay ── */}
      <div className="warm-overlay hero-overlay-sepia" aria-hidden="true" />

      {/* ── Layer 3: Bottom gradient for text legibility ── */}
      <div className="hero-overlay-gradient" aria-hidden="true" />

      {/* ── Layer 4: Grain texture ── */}
      <div className="hero-grain" aria-hidden="true" />

      {/* ── Layer 5: Content ── */}
      <div className="hero-content">
        {/* EP-ROLLOUT SWAP: release date — replace "coming" eyebrow text with the date */}
        <p className="hero-eyebrow">{HERO_EYEBROW}</p>

        {/* EP-ROLLOUT SWAP: cover art — replace with <PictureImage name="..." /> when art exists */}
        <h1 className="hero-band-name">{HERO_BAND_NAME}</h1>

        {/* EP-ROLLOUT SWAP: streaming row — uncomment and fill streaming links when EP releases */}

        <div className="hero-quotes">
          <Reveal>
            <blockquote className="hero-quote">
              {`\u201C${HERO_QUOTES[0]}\u201D`}
            </blockquote>
          </Reveal>

          <Reveal delay={0.15}>
            <blockquote className="hero-quote">
              {`\u201C${HERO_QUOTES[1]}\u201D`}
            </blockquote>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <a
            className="hero-cta"
            href={HERO_CTA_SPOTIFY_URL}
            target="_blank"
            rel="noreferrer"
          >
            {HERO_CTA_LABEL}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/*
SMOKE-IMPORTS:
- PictureImage
- Parallax
- Reveal
*/
