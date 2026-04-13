/**
 * About.js — Warm intimate bio section for the Joytrip website.
 *
 * Layout:
 *   Desktop (≥ 1024px): Two-column grid — bio + member credits (60%) / portrait (40%)
 *   Mobile  (≤ 768px):  Single column — header → portrait → bio → credits → press
 *
 * Includes:
 *   - Band bio (two paragraphs, verbatim copy)
 *   - Member credits list
 *   - Portrait via PictureImage (vue-full-band, manifest-backed)
 *   - Press sub-block linking to Little Village Magazine review
 */

import React from 'react';

import Reveal from '../../shared/Reveal';

import LiveSkylark from '../../Assets/live-skylark-2025.png';
import LittleVillageArticle from '../../Assets/littlevillagearticle2.png';

import './About.css';

const MEMBERS = [
  { name: 'Michael Schodin',      instruments: 'guitar, vocals, production, mixing' },
  { name: 'Eddie Hochman',        instruments: 'guitar, vocals, keyboards, and trumpet' },
  { name: 'Bennett Shapiro',      instruments: 'drums, vocals' },
  { name: 'Mitch Wisniewski',     instruments: 'bass and mandolin' },
];

export default function About() {
  return (
    <div className="about">
      {/* ── Section header ── */}
      <Reveal>
        <header className="about-header">
          <p className="eyebrow about-eyebrow">ABOUT</p>
          <h2 className="about-display">The band</h2>
        </header>
      </Reveal>

      {/* ── Two-column content grid ── */}
      <div className="about-grid">

        {/* ── Left column: bio + member credits ── */}
        <div className="about-left">
          <Reveal>
            <div className="about-bio">
              <p className="about-bio-paragraph">
                Joytrip is an artist collective, working to create delicious, dancey and descriptive music; live and in the studio. Drawing from diverse musical educations, Joytrip seeks to bring out honest and colorful music. Thriving in live performances with lengthy sets, Joytrip has played "ten thousand cafes and bars." The band works to play to the space and for the people.
              </p>
              <p className="about-bio-paragraph">
                The band is fully independent with great appreciation for the community that surrounds them. Michael Schodin leads on guitar, vocals, and production, mixing; Eddie Hochman contributes guitar, vocals, keyboards, and trumpet. Bennett Shapiro on drums and vocals, and Mitch Wisniewski brings it all around on bass and mandolin. The band draws inspiration from past icons (Nina Simone, The Beach Boys, David Grisman, Led Zeppelin, Roy Hargrove), and modern artists (Gigi Perez, Billy Strings, Forester). Joytrip wanders and will keep on passing by. And dang we're excited when we get to play.
              </p>
            </div>
          </Reveal>

          {/* ── Member credits ── */}
          <Reveal delay={0.05}>
            <ul className="about-credits" aria-label="Band members and instruments">
              {MEMBERS.map(({ name, instruments }) => (
                <li key={name} className="about-credits-item">
                  <span className="about-credits-name">{name}</span>
                  <span className="about-credits-instruments">{instruments}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ── Right column: portrait ── */}
        <div className="about-portrait-col">
          <Reveal delay={0.1} className="about-portrait-reveal">
            <div className="about-portrait-frame">
              <img
                src={LiveSkylark}
                alt="Joytrip performing live at Skylark Lounge, 2025"
                className="about-portrait-img"
                loading="lazy"
              />
              <div className="warm-overlay about-portrait-overlay" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Press sub-block ── */}
      <div className="about-press-section">
        <div className="about-press-divider" aria-hidden="true" />

        <Reveal delay={0.2}>
          <p className="eyebrow about-press-eyebrow">PRESS</p>
          <a
            className="about-press-card"
            href="https://littlevillagemag.com/album-review-qa-joytrip-mr-time-and-the-joyful-ploys/"
            target="_blank"
            rel="noreferrer"
            aria-label="Read the Little Village Magazine review of Mr Time and the Joyful Ploys"
          >
            <img
              src={LittleVillageArticle}
              alt="Little Village Magazine article thumbnail"
              className="about-press-thumbnail"
            />
            <div className="about-press-text">
              <p className="about-press-title">
                Album Review &amp; Q&amp;A: Joytrip's Mr Time and the Joyful Ploys
              </p>
              <p className="about-press-publication">Little Village Magazine</p>
            </div>
          </a>
        </Reveal>
      </div>
    </div>
  );
}

/*
SMOKE-IMPORTS:
- PictureImage
- Reveal
*/
