/**
 * Parallax.js — Subtle scroll-based vertical parallax effect for hero imagery.
 *
 * Wraps children in a motion.div that drifts vertically as the page
 * scrolls, creating a layered depth effect on hero sections.
 * Respects "prefers-reduced-motion" — if reduced motion is preferred,
 * children are rendered without any animation wrapper.
 *
 * Usage:
 *   <Parallax offset={30}>
 *     <img src={heroImage} alt="Hero" />
 *   </Parallax>
 *
 * Props:
 *   offset    {number}  — max pixels of vertical drift (default 30)
 *   children  {node}    — content to apply parallax to
 *   className {string}  — CSS class forwarded to the wrapper
 *   style     {object}  — inline styles forwarded to the wrapper
 *
 * NOTE: Uses framer-motion 6.5's useScroll API. The hook returns
 * { scrollY, scrollYProgress } for viewport scroll tracking.
 */

import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function Parallax({
  children,
  offset = 30,
  className,
  style,
}) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Transform scrollY into a vertical drift within [-offset, offset] range.
  // This creates an effect where the element moves slower than the page scroll.
  const y = useTransform(scrollY, [0, 600], [0, offset]);

  // If the user prefers reduced motion, skip all animation
  if (prefersReducedMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={{ y, ...style }}
    >
      {children}
    </motion.div>
  );
}
