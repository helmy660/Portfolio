import React from "react";
import { Switch, Route } from "react-router-dom";

import { PortfolioWrapper } from "../../style/wrapper";
import Intro from "../Intro";
import { SkillList } from "../Skills";
import { CourseList } from "../Courses";
import { ProjectList } from "../Projects";
import Resume from "../Resume";

export default function Portfolio() {
  return (
    <PortfolioWrapper>
      <Switch>
        <Route exact path="/" render={() => <Intro />} />
        <Route path="/skills" render={() => <SkillList />} />
        <Route path="/courses" render={() => <CourseList />} />
        <Route path="/projects" render={() => <ProjectList />} />
        <Route path="/cv" render={() => <Resume />} />
        <Route render={() => window.alert("Wrong Path")} />
      </Switch>
    </PortfolioWrapper>
  );
}
