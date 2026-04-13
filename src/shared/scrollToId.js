/**
 * scrollToId.js — Native smooth scroll utility, replacing react-scroll.
 *
 * Uses the browser's built-in scrollIntoView() API, which automatically
 * respects the user's "prefers-reduced-motion" setting when the CSS rule
 * `html { scroll-behavior: smooth; }` is paired with the media query
 * `@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }`.
 *
 * Also updates the URL hash without causing a jump to the anchor.
 *
 * Usage:
 *   import { scrollToId } from '../shared/scrollToId';
 *   <button onClick={() => scrollToId('section-hero')}>Back to top</button>
 */

/**
 * Smoothly scrolls the page to the element with the given ID.
 * Updates the URL hash without jumping.
 *
 * @param {string} id — The HTML element ID to scroll to (without the # prefix).
 */
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // Update the URL hash without triggering a jump:
  window.history.pushState(null, '', `#${id}`);
}
