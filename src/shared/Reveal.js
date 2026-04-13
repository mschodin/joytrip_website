/**
 * Reveal.js — Fade + translate-in animation on scroll using Framer Motion.
 *
 * Wraps children in a motion.div that animates when the element enters
 * the viewport. Respects the user's "prefers-reduced-motion" setting —
 * if reduced motion is preferred, children are rendered without any
 * animation wrapper at all.
 *
 * Usage:
 *   <Reveal delay={0.1} y={24}>
 *     <h2>Hello World</h2>
 *   </Reveal>
 *
 * Props:
 *   delay     {number}   — seconds to delay the animation (default 0)
 *   y         {number}   — initial vertical offset in pixels (default 20)
 *   once      {boolean}  — only animate once (default true)
 *   children  {node}     — content to reveal
 *   className {string}   — CSS class forwarded to the wrapper
 *   style     {object}   — inline styles forwarded to the wrapper
 */

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({
  children,
  delay = 0,
  y = 20,
  once = true,
  className,
  style,
}) {
  const prefersReducedMotion = useReducedMotion();

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
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
