import React, { Component } from 'react';
import { Wrapper } from './AppStyle';
import { BrowserRouter as Router } from "react-router-dom";
import Portfolio from './components/Portfolio/Portfolio';
import SideBar from './components/SideBar/SideBar';
import Social from './components/Social/Social';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <SideBar/>
          <Portfolio/>
          <Social/>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
