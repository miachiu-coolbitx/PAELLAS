import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';
import Features from './components/features';
import About from './components/about';
import Members from './components/members';
import History from './components/history';
import Photos from './components/photos';
import Source from './components/source';
import JsonData from './data/data.json';
import './test.css';

export default class Fullpage extends Component {
  onLeave(origin, destination, direction) {
    console.log('Leaving section ' + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log('After load: ' + destination.index);
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
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        //sectionsColor={["orange", "purple", "green"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <Features data={this.state.landingPageData.Features} />
              <About data={this.state.landingPageData.About} />
              <Members data={this.state.landingPageData.Services} />
              <History data={this.state.landingPageData.Services} />
              <Photos data={this.state.landingPageData.Testimonials} />
              <Source data={this.state.landingPageData.Team} />
              {/* <div className="section">
                <div className="slide">
                  <h3>Slide 2.1</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.2</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.3</h3>
                </div>
              </div> */}
              {/* <button onClick={() => fullpageApi.moveTo(2, 0)}>
                  Move top
                </button> */}
            </div>
          );
        }}
      />
    );
  }
}
