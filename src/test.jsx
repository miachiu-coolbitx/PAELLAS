import React, { Component } from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import PV from './components/pv';
import Members from './components/members';
import About from './components/about';
import JsonData from './data/data.json';
import './test.css'

export default class App extends Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }

  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }
  render () {
    return (
      <ReactFullpage
        scrollOverflow={true}
        //sectionsColor={["orange", "purple", "green"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
              <Members data={this.state.landingPageData.Services} />
              </div>
              <div className="section">
                <div className="slide">
                  <h3>Slide 2.1</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.2</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.3</h3>
                </div>
              </div>
              <div className="section">
              <About data={this.state.landingPageData.About} />
                <button onClick={() => fullpageApi.moveTo(2, 0)}>
                  Move top
                </button>
              </div>
            </div>
          );
        }}
      />
    )
  }
}