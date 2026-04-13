import React from 'react';
import Reveal from '../../shared/Reveal';
import './Contact.css';

const BOOKING_EMAIL = 'booking@joytripband.com';

export default function Contact() {
  return (
    <div className="contact">
      <Reveal delay={0}>
        <p className="contact-eyebrow">CONTACT</p>
        <h2 className="contact-heading">Book the band</h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="contact-lede">
          Got a show, a festival slot, a café Sunday brunch?
          Drop us a line — we'd love to play it.
        </p>
      </Reveal>

      {/* Direct email block */}
      <Reveal delay={0.2} className="contact-direct">
        <p className="contact-direct-label">Reach us directly</p>
        <a
          className="contact-email"
          href={`mailto:${BOOKING_EMAIL}`}
          aria-label="Email booking@joytripband.com"
        >
          {BOOKING_EMAIL}
        </a>
      </Reveal>
    </div>
  );
}

/*
SMOKE-IMPORTS:
- Reveal
*/
