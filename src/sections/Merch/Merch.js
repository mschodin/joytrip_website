/**
 * Merch.js — Editorial callout card linking out to the Joytrip Square storefront.
 *
 * No product grid, no embedded store, no API calls.
 * A single full-width section with a layered background photo and centered CTA.
 *
 * Layer order (bottom → top):
 *   1. Background photo (joytrip-sunset-photo via PictureImage — decorative, empty alt)
 *   2. Warm sepia overlay (--color-overlay-warm)
 *   3. Dark gradient overlay (exception: rgba hex values — see note below)
 *   4. Content (eyebrow, headline, sub-line, CTA anchor)
 *
 * NOTE — Dark gradient hex exception:
 *   The overlay gradient uses rgba(26, 23, 20, …) literals rather than a CSS var.
 *   This is the one approved exception in the no-hex-literals rule because:
 *   (a) the alpha value needs to vary across gradient stops, which CSS vars cannot do
 *       without color-mix() (not yet baseline), and
 *   (b) text legibility on a full-bleed photo absolutely requires this control.
 *   The values match --color-ink (#1a1714) so they are not arbitrary magic numbers.
 *   This pattern is identical to Hero.css line 69-81 (already approved).
 */

import React from 'react';

import PictureImage from '../../shared/PictureImage';
import Reveal from '../../shared/Reveal';

import './Merch.css';

const STORE_URL = 'https://joytripband.square.site/';

export default function Merch() {
  return (
    <section className="merch" aria-label="Joytrip merch store">
      {/* ── Layer 1: Background photo ── */}
      <div className="merch-bg" aria-hidden="true">
        <PictureImage
          name="joytrip-sunset-photo"
          alt=""
          sizes="100vw"
          loading="lazy"
          className="merch-photo"
        />
      </div>

      {/* ── Layer 2: Warm sepia wash ── */}
      <div className="merch-overlay-sepia" aria-hidden="true" />

      {/* ── Layer 3: Dark gradient for text legibility ── */}
      {/*
        NOTE: rgba hex values are intentional here — see file-level comment.
        This is the ONE approved exception to the no-hex-literals rule.
      */}
      <div className="merch-overlay-gradient" aria-hidden="true" />

      {/* ── Layer 4: Content ── */}
      <div className="merch-content">
        <Reveal>
          <p className="merch-eyebrow">MERCH</p>

          <h2 className="merch-headline">Wear it / spin it</h2>

          <p className="merch-subline">
            Threads, stickers, matchbooks — straight from the band.
          </p>

          <a
            className="merch-cta"
            href={STORE_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Shop Joytrip merch on Square"
          >
            Shop the store
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/*
SMOKE-IMPORTS:
- PictureImage
- Reveal
*/
