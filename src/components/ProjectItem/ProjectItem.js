import React, { Component } from 'react';
import { Wrapper, Card, ProjectTitle, ProjectDesc, Tools, ProjectTools, ProjectLink } from './Style';


class ProjectItem extends Component {
    render() {
        return (
            <Wrapper>
                <Card src={this.props.project.projectImage}>
                    <ProjectTitle>{this.props.project.projectTitle}</ProjectTitle>
                    <ProjectDesc>{this.props.project.projectDesc}</ProjectDesc>
                    <Tools>
                    {
                        this.props.project.projectTools.map(item => {
                            return <ProjectTools>{item}</ProjectTools>
                        })
                    }
                    </Tools>
                    <a target="_blank" rel="noopener noreferrer" href={this.props.project.projectLink} style={{"text-decoration": "none"}}>
                        <ProjectLink>Source</ProjectLink>
                    </a>
                </Card>
            </Wrapper>
        );
    }
}

export default ProjectItem;