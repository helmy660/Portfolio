import React, { Component } from 'react';
import { PortfolioWrapper } from './Style';
import { Switch, Route } from 'react-router-dom';

import Intro from '../Intro/Intro'
import SkillList from '../SkillList/SkillList';
import CourseList from '../CourseList/CourseList';
import ProjectList from '../ProjectList/ProjectList';
import Resume from '../Resume/Resume';


class Portfolio extends Component {
    render() {
        return (
            <PortfolioWrapper>
                <Switch>
                    <Route exact path="/" render={() => <Intro/> } />
                    <Route path="/skills" render={() => <SkillList/> } />
                    <Route path="/courses" render={() => <CourseList/> } />
                    <Route path="/projects" render={() => <ProjectList/> } />
                    <Route path="/cv" render={() => <Resume/> } />
                    <Route render={() => window.alert("Wrong Path") } />             
                </Switch>
            </PortfolioWrapper>
        );
    }
}

export default Portfolio;