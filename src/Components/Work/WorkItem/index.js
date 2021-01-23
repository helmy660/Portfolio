import React from "react";

export function WorkItem({ work }) {
  return (
    <div key={work.company}>
      <h3>{work.company}</h3>
      <p className="info">
        {work.title}
        <span>&bull;</span> <em className="date">{work.years}</em>
      </p>
      {work.description.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
}
