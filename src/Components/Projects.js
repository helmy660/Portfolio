import React from "react";
import { ProjectList } from "../Components/Project";

export function Projects(props) {
  const projects = props.data ? props.data.projects : [];
  return (
    <section id="projects">
      <div className="row">
        <div className="twelve columns collapsed">
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            <ProjectList projects={projects} />
          </div>
        </div>
      </div>
    </section>
  );
}
