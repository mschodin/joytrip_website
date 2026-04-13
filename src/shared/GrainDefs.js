/**
 * GrainDefs.js — SVG filter definitions for the film grain texture effect.
 *
 * Renders a hidden SVG containing an SVG filter with id="grain".
 * Mount this once at the top of <App /> so it's available globally.
 *
 * Other components opt into the grain effect via CSS:
 *   .grain-overlay {
 *     filter: url(#grain);
 *   }
 *
 * PERFORMANCE NOTE: Apply the grain filter to a small overlay <div>
 * positioned on top of the image, NOT directly to the image element.
 * Applying SVG filters to large images is GPU-intensive.
 *
 * Example usage in a component:
 *   <div style={{ position: 'relative' }}>
 *     <img src={photo} alt="..." />
 *     <div className="grain-overlay" style={{
 *       position: 'absolute', inset: 0,
 *       filter: 'url(#grain)',
 *       opacity: 0.12,
 *       pointerEvents: 'none',
 *       mixBlendMode: 'overlay',
 *     }} />
 *   </div>
 */

import React from 'react';

export default function GrainDefs() {
  return (
    <svg
      aria-hidden="true"
      style={{ display: 'none', position: 'absolute', width: 0, height: 0 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            seed="5"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            type="saturate"
            values="0"
            in="noise"
            result="greyNoise"
          />
          <feComposite
            operator="in"
            in="greyNoise"
            in2="SourceGraphic"
            result="maskedNoise"
          />
          <feBlend
            in="SourceGraphic"
            in2="maskedNoise"
            mode="overlay"
          />
        </filter>
      </defs>
    </svg>
  );
}
