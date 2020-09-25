import React from "react";
import { Wrapper } from "./style/wrapper";
import { BrowserRouter as Router } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import SideBar from "./components/SideBar";
import Social from "./components/Social";

export default function App() {
  return (
    <Wrapper>
      <Router>
        <SideBar />
        <Portfolio />
        <Social />
      </Router>
    </Wrapper>
  );
}
