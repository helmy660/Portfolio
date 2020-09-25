import React from "react";
import { PortfolioWrapper } from "./Style";
import { Switch, Route } from "react-router-dom";

import Intro from "../Intro";
import SkillList from "../SkillList";
import CourseList from "../CourseLis";
import ProjectList from "../ProjectList";
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
