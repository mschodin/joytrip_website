import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';
import { scrollToId } from '../shared/scrollToId';

const NAV_LINKS = [
  { label: 'Music',        id: 'section-music' },
  { label: 'Tour',         id: 'section-tour' },
  { label: 'About',        id: 'section-about' },
  { label: 'Text List',    id: 'section-mailing-list' },
  { label: 'Contact',      id: 'section-contact' },
];

// All sections observed for active-link tracking (including ones not in NAV_LINKS)
const SECTION_IDS = [
  'section-hero',
  'section-music',
  'section-tour',
  'section-about',
  'section-gallery',
  'section-mailing-list',
  'section-merch',
  'section-contact',
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('section-music');
  const [scrolled, setScrolled] = useState(false);
  const hamburgerRef = useRef(null);

  // ── Active-link tracking via IntersectionObserver ──────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Collect all currently-intersecting entries; pick the one most in view
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Account for sticky nav height at the top; give 40% dead zone at bottom
        rootMargin: `-${72}px 0px -40% 0px`,
        threshold: [0, 0.25, 0.4, 0.5, 0.75, 1],
      }
    );

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      } else {
        console.warn('[nav] IntersectionObserver: element not found:', id);
      }
    });

    return () => observer.disconnect();
  }, []);

  // ── Shadow on scroll ──────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Close mobile menu on Escape ───────────────────────────────────────────
  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        // Return focus to the hamburger button
        if (hamburgerRef.current) hamburgerRef.current.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  function handleNavClick(id) {
    scrollToId(id);
    setMenuOpen(false);
  }

  function handleWordmarkClick() {
    scrollToId('section-hero');
    setMenuOpen(false);
  }

  // Determine active nav link (fall back to first nav link when none match)
  const activeNavId =
    NAV_LINKS.some(l => l.id === activeId) ? activeId : NAV_LINKS[0].id;

  return (
    <>
      <nav
        className={`nav${scrolled ? ' nav--scrolled' : ''}`}
        aria-label="Primary"
      >
        <div className="nav__inner">

          {/* ── Wordmark ── */}
          <button
            className="nav__wordmark"
            onClick={handleWordmarkClick}
            aria-label="Scroll to top"
          >
            JOYTRIP
          </button>

          {/* ── Desktop links ── */}
          <ul className="nav__links">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <button
                  className={`nav__link-btn${activeNavId === link.id ? ' nav__link-btn--active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                  aria-current={activeNavId === link.id ? 'page' : undefined}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="https://joytripband.square.site/"
                target="_blank"
                rel="noreferrer"
                className="nav__merch-btn"
              >
                Shop Merch
              </a>
            </li>
          </ul>

          {/* ── Mobile hamburger ── */}
          <button
            ref={hamburgerRef}
            className={`nav__hamburger${menuOpen ? ' nav__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="nav__hamburger-line" aria-hidden="true" />
            <span className="nav__hamburger-line" aria-hidden="true" />
            <span className="nav__hamburger-line" aria-hidden="true" />
          </button>

        </div>
      </nav>

      {/* ── Mobile menu sheet ── */}
      <div
        className={`nav__mobile-menu${menuOpen ? ' nav__mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="nav__mobile-links">
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <button
                className={`nav__mobile-link-btn${activeNavId === link.id ? ' nav__mobile-link-btn--active' : ''}`}
                onClick={() => handleNavClick(link.id)}
                aria-current={activeNavId === link.id ? 'page' : undefined}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <a
          href="https://joytripband.square.site/"
          target="_blank"
          rel="noreferrer"
          className="nav__mobile-merch-btn"
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
        >
          Shop Merch
        </a>
      </div>
    </>
  );
}

export default NavBar;
