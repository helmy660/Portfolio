import React from "react";
import { SkillList } from "../Components/Skill";

export function Skills(props) {
  const skills = props.data ? props.data.skills : [];
  const skillmessage = props.data ? props.data.skillmessage : "";

  return (
    <section id="skills">
      <SkillList skills={skills} skillmessage={skillmessage} />
    </section>
  );
}
