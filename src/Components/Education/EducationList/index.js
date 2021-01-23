import React from "react";
import { EducationItem } from "../index";

export function EducationList({ education }) {
  return (
    <div className="row education">
      <div className="three columns header-col">
        <h1>
          <span>Education</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            {education.map((education) => (
              <EducationItem education={education} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
