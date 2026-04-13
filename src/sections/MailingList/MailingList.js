/**
 * MailingList.js — Text List section with Google Form embed for sign-ups.
 *
 * Visual layers (bottom → top):
 *   1. Warm radial vignette (absolute, behind content)
 *   2. Grain texture overlay (absolute)
 *   3. Content (rule, eyebrow, headline, sub-copy, form iframe)
 */

import React from 'react';

import Reveal from '../../shared/Reveal';

import './MailingList.css';

const GOOGLE_FORM_SRC =
  'https://docs.google.com/forms/d/e/1FAIpQLSfZjWpxqX5ksVijad-HR7K9JrOZvr8fmCPAuAL7EGV_y9DIsg/viewform?embedded=true';

export default function MailingList() {
  return (
    <section className="mailing-list" aria-labelledby="ml-headline">
      {/* ── Layer 1: Warm radial vignette ── */}
      <div className="ml-vignette" aria-hidden="true" />

      {/* ── Layer 2: Grain texture ── */}
      <div className="ml-grain" aria-hidden="true" />

      {/* ── Layer 3: Content ── */}
      <div className="ml-content">
        {/* Decorative amber rule */}
        <Reveal delay={0}>
          <div className="ml-rule" aria-hidden="true" />
        </Reveal>

        {/* Eyebrow label */}
        <Reveal delay={0.05}>
          <p className="ml-eyebrow">Text List</p>
        </Reveal>

        {/* Main headline */}
        <Reveal delay={0.1}>
          <h2 className="ml-headline" id="ml-headline">
            Don't miss the next show
          </h2>
        </Reveal>

        {/* Sub-copy */}
        <Reveal delay={0.2}>
          <p className="ml-subtext">
            Drop your number and you'll hear about ticket drops, the next EP,
            and shows happening near you — before anyone else.
          </p>
        </Reveal>

        {/* Google Form embed */}
        <Reveal delay={0.3}>
          <div className="ml-form-wrap">
            <iframe
              className="ml-form"
              src={GOOGLE_FORM_SRC}
              title="Joytrip text list sign-up form"
              loading="lazy"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
            >
              Loading…
            </iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/*
SMOKE-IMPORTS:
- Reveal
*/
