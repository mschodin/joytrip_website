import React from "react";
import "./Section.css";

export default function Section({ content, id }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        {content}
      </div>
    </div>
  );
}