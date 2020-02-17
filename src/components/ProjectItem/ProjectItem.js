import React, { Component } from 'react';
import { ProjectCard, ProjectTitle, ProjectDesc, Tools, ProjectTool, ProjectLink } from './Style';


class ProjectItem extends Component {
    render() {
        return (
            <ProjectCard src={this.props.project.projectImage}>
                <ProjectTitle>{this.props.project.projectTitle}</ProjectTitle>
                <ProjectDesc>{this.props.project.projectDesc}</ProjectDesc>
                <Tools>
                {
                    this.props.project.projectTools.map(item => {
                        return <ProjectTool>{item}</ProjectTool>
                    })
                }
                </Tools>
                <a target="_blank" rel="noopener noreferrer" href={this.props.project.projectLink} style={{"text-decoration": "none"}}>
                    <ProjectLink>Source</ProjectLink>
                </a>
            </ProjectCard>
        );
    }
}

export default ProjectItem;