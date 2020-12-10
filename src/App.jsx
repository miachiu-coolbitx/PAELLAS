import React, { Component } from 'react';
import Navigation from './components/navigation';
import PV from './components/pv';
import Features from './components/features';
import About from './components/about';
import Members from './components/members';
import History from './components/history';
import Photos from './components/photos';
import Source from './components/source';
import JsonData from './data/data.json';
import Fullpage from './test';

export class App extends Component {
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
      <div>
        {/* <Navigation data={this.state.landingPageData.Navigation} /> */}
        {/* <PV data={this.state.landingPageData.PV} /> */}
        <Fullpage />
      </div>
    );
  }
}

export default App;
