import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { About } from "./Components/About";
import { WorkExperince } from "./Components/WorkExperince";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { Courses } from "./Components/Courses";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <WorkExperince data={this.state.resumeData.resume} />
        <Skills data={this.state.resumeData.resume} />
        <Courses data={this.state.resumeData.portfolio} />
        <Projects data={this.state.resumeData.portfolio} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
