import React from "react";
import { SkillItem } from "..";

export function SkillList({ skills, skillmessage }) {
  return (
    <div className="row skill">
      <div className="three columns header-col">
        <h1>
          <span>Skills</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <p>{skillmessage}</p>
        {skills.map((item, index) => {
          return <SkillItem key={index} skill={item} />;
        })}
      </div>
    </div>
  );
}
