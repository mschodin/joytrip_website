/**
 * Tour.js — Tour dates section for the Joytrip website.
 *
 * Renders a card-based list of upcoming shows when gigs are present,
 * or a deliberately designed mailing-list funnel when the list is empty.
 *
 * Empty state:    Section header → "More dates coming soon." tagline →
 *                 sub-copy → down-arrow → amber pill CTA → scrollToId
 * Populated state: Section header → stacked show cards (date / venue / ticket)
 */

import React from 'react';

import Reveal from '../../shared/Reveal';
import { scrollToId } from '../../shared/scrollToId';
import { gigs } from './gigs';

import './Tour.css';

/* ─── Section header (shared between both states) ─── */
function TourHeader() {
  return (
    <div className="tour-header">
      <Reveal delay={0}>
        <p className="eyebrow tour-eyebrow">TOUR</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="tour-title">On the road</h2>
      </Reveal>
    </div>
  );
}

/* ─── Empty state ─── */
function TourEmpty() {
  return (
    <div className="tour-empty">
      <TourHeader />

      <div className="tour-empty-body">
        <Reveal delay={0}>
          <p className="tour-coming-soon">More dates coming soon.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="tour-sub-copy">
            Joytrip is between runs right now. Get on the list and you'll be
            the first to hear when the next set of shows drops.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="tour-chevron-wrap" aria-hidden="true">
            <svg
              className="tour-chevron"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <button
            className="tour-cta"
            type="button"
            onClick={() => scrollToId('section-mailing-list')}
          >
            Get on the list
          </button>
        </Reveal>
      </div>
    </div>
  );
}

/* ─── Single show card ─── */
function GigCard({ gig, index }) {
  // Split date string so we can style year separately.
  // Expected format: 'Aug 14 2026' → month+day = 'Aug 14', year = '2026'
  const parts = gig.date ? gig.date.trim().split(/\s+/) : [];
  const year = parts.length >= 3 ? parts[parts.length - 1] : '';
  const monthDay = parts.length >= 2 ? parts.slice(0, parts.length - 1).join(' ') : gig.date;

  return (
    <Reveal delay={index * 0.08}>
      <div className="tour-card">
        {/* Left: date column */}
        <div className="tour-card-date">
          <span className="tour-card-month-day">{monthDay}</span>
          {year !== '' && (
            <span className="tour-card-year">{year}</span>
          )}
        </div>

        {/* Center: venue info */}
        <div className="tour-card-info">
          <span className="tour-card-venue">{gig.venue}</span>
          <span className="tour-card-city">{gig.city}</span>
          {gig.time && (
            <span className="tour-card-time">{gig.time}</span>
          )}
        </div>

        {/* Right: ticket action */}
        <div className="tour-card-action">
          {gig.ticket && (
            <a
              className="tour-ticket-btn"
              href={gig.ticket}
              target="_blank"
              rel="noreferrer"
            >
              Tickets
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Populated state ─── */
function TourPopulated() {
  return (
    <div className="tour-populated">
      <TourHeader />

      <div className="tour-card-list">
        {gigs.map((gig, i) => (
          <GigCard key={`${gig.date}-${gig.venue}-${i}`} gig={gig} index={i} />
        ))}
      </div>
    </div>
  );
}

/* ─── Root export ─── */
export default function Tour() {
  return (
    <div className="tour-section">
      {gigs.length === 0 ? <TourEmpty /> : <TourPopulated />}
    </div>
  );
}

/*
SMOKE-IMPORTS:
- Reveal
- scrollToId
*/
