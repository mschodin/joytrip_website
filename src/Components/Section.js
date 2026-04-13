import React from "react";
import "./Section.css";

/**
 * Section — layout shell for each page section.
 *
 * Props:
 *   id        {string}  — HTML id used for scroll navigation
 *   content   {node}    — the section's content component
 *   className {string}  — optional extra CSS class (e.g. "section--alt" for cream background)
 */
export default function Section({ content, id, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section-content">{content}</div>
    </section>
  );
}
