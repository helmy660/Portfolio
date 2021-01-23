import React from "react";
import { WorkItem } from "../index";

export function WorkList({ work }) {
  return (
    <div className="row work">
      <div className="three columns header-col">
        <h1>
          <span>Work Experience</span>
        </h1>
      </div>
      <div className="nine columns main-col">
        {work.map((item) => (
          <WorkItem work={item} />
        ))}
      </div>
    </div>
  );
}
