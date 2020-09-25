import React from "react";
import { ProjectCard, ProjectTitle, ProjectDesc, Tools, ProjectTool, ProjectLink } from "../../../globalStyle/projects";

export function ProjectItem(props) {
  return (
    <ProjectCard src={props.project.projectImage}>
      <ProjectTitle>{props.project.projectTitle}</ProjectTitle>
      <ProjectDesc>{props.project.projectDesc}</ProjectDesc>
      <Tools>
        {props.project.projectTools.map((item, index) => {
          return <ProjectTool key={index}>{item}</ProjectTool>;
        })}
      </Tools>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.project.projectLink}
        style={{ "text-decoration": "none" }}
      >
        <ProjectLink>Source</ProjectLink>
      </a>
    </ProjectCard>
  );
}
