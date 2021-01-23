import React from "react";
import { EducationList } from "./Education";
import { WorkList } from "./Work";

export function WorkExperince(props) {
  const work = props.data ? props.data.work : [];
  const education = props.data ? props.data.education : [];

  return (
    <section id="workExperince">
      <WorkList work={work} />
      <EducationList education={education} />
    </section>
  );
}
