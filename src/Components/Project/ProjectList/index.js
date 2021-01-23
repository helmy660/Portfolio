import React from "react";
import { CardWrapper } from "../../../style/wrapper";
import { ProjectItem } from "..";

export function ProjectList({ projects }) {
  return (
    <CardWrapper>
      {projects.map((item, index) => {
        return <ProjectItem key={index} project={item}></ProjectItem>;
      })}
    </CardWrapper>
  );
}
