/**
 * Music.js — Discography grid section for the Joytrip website.
 *
 * Layout:
 *   Desktop (≥ 1024px): 3-column album tile grid, editorial callout below
 *   Mobile  (≤ 768px):  1-column full-width tiles, editorial callout below
 *
 * Tile hover: ±1.5deg rotation + shadow lift via Framer Motion whileHover.
 * Respects prefers-reduced-motion via useReducedMotion().
 * Staggered Reveal entry for each tile.
 * Editorial callout rendered below the grid for any release with editorial text.
 */

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import Reveal from '../../shared/Reveal';

import SpotifyIcon from '../../Assets/icons8-spotify.svg';
import AppleIcon from '../../Assets/icons8-apple-music.svg';
import YouTubeIcon from '../../Assets/icons8-youtube.svg';

import { releases } from './releases';
import './Music.css';

// ── Album tile ───────────────────────────────────────────────────────────────

function AlbumTile({ release, index }) {
  const prefersReducedMotion = useReducedMotion();

  const hoverProps = prefersReducedMotion
    ? {}
    : {
        whileHover: {
          rotate: index % 2 === 0 ? 1.5 : -1.5,
          y: -4,
          boxShadow: '0 12px 32px rgba(26,23,20,0.18)',
          transition: { duration: 0.25, ease: 'easeOut' },
        },
      };

  const streamingLinks = [
    {
      key: 'spotify',
      url: release.spotify,
      icon: SpotifyIcon,
      label: `Listen to ${release.title} on Spotify`,
    },
    {
      key: 'apple',
      url: release.apple,
      icon: AppleIcon,
      label: `Listen to ${release.title} on Apple Music`,
    },
    {
      key: 'youtube',
      url: release.youtube,
      icon: YouTubeIcon,
      label: `Watch ${release.title} on YouTube`,
    },
  ].filter((link) => link.url !== null && link.url !== undefined);

  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        className="music-tile"
        {...hoverProps}
      >
        <div className="music-tile-cover-wrap">
          {release.cover !== null && release.cover !== undefined ? (
            <img
              src={release.cover}
              alt={`${release.title} album cover`}
              className="music-tile-cover"
              loading="lazy"
            />
          ) : (
            <div className="music-tile-cover-placeholder" aria-label={`${release.title} album cover`}>
              <span className="music-tile-cover-placeholder-text">{release.title}</span>
            </div>
          )}
        </div>
        <div className="music-tile-meta">
          <h3 className="music-tile-title">{release.title}</h3>
          <p className="music-tile-year">{release.year}</p>
          {streamingLinks.length > 0 && (
            <div className="music-tile-links" aria-label={`Streaming links for ${release.title}`}>
              {streamingLinks.map(({ key, url, icon, label }) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="music-tile-link-icon"
                >
                  <img src={icon} alt="" className="music-tile-icon" />
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Reveal>
  );
}

// ── Editorial callout ─────────────────────────────────────────────────────────

function EditorialCallout({ release }) {
  if (!release.editorial) return null;

  return (
    <Reveal delay={0.4}>
      <aside className="music-editorial" aria-label={`Editorial note on ${release.title}`}>
        <p className="eyebrow music-editorial-eyebrow">LITTLE VILLAGE MAGAZINE ON {release.title.toUpperCase()}</p>
        <blockquote className="music-editorial-quote">
          &ldquo;{release.editorial}&rdquo;
        </blockquote>
      </aside>
    </Reveal>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function Music() {
  const editorialRelease = releases.find((r) => r.editorial !== null) ?? null;

  return (
    <div className="music">
      {/* ── Section header ── */}
      <Reveal>
        <header className="music-header">
          <p className="eyebrow music-eyebrow">MUSIC</p>
          <h2 className="music-display">Listen</h2>
        </header>
      </Reveal>

      {/* ── Discography grid ── */}
      <div className="music-grid" role="list" aria-label="Joytrip discography">
        {releases.map((release, i) => (
          <div key={release.id} role="listitem">
            <AlbumTile release={release} index={i} />
          </div>
        ))}
      </div>

      {/* ── Editorial callout (below grid, only for releases with editorial copy) ── */}
      {editorialRelease && <EditorialCallout release={editorialRelease} />}
    </div>
  );
}

/*
SMOKE-IMPORTS:
- Reveal
*/
