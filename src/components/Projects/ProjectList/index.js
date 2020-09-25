import React from "react";
import { CardWrapper } from "../../../style/wrapper";
import { ProjectItem } from "../";
import { projects } from "../../../resources";

export function ProjectList() {
  return (
    <CardWrapper>
      {projects.map((item, index) => {
        return <ProjectItem key={index} project={item}></ProjectItem>;
      })}
    </CardWrapper>
  );
}
