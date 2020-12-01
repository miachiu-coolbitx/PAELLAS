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
        <Navigation data={this.state.landingPageData.Navigation} />
        <PV data={this.state.landingPageData.PV} />
        <Features data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        <Members data={this.state.landingPageData.Services} />
        <History data={this.state.landingPageData.Services} />
        <Photos data={this.state.landingPageData.Testimonials} />
        <Source data={this.state.landingPageData.Team} />
      </div>
    );
  }
}

export default App;
