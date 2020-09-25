import React from "react";
import { Wrapper } from "./AppStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import SideBar from "./components/SideBar/SideBar";
import Social from "./components/Social/Social";

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
