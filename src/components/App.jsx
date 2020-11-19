import React, { Component } from 'react';
import Navigation from './navigation';
import Header from './header';
import PV from './pv';
import Features from './features';
import About from './about';
import Members from './members';
import History from './history';
import Photos from './photos';
import Source from './source';
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData: {},
  };
  getResumeData() {
    $.ajax({
      url: '/data.json',
      dataType: 'json',
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
      <div>
        <Navigation data={this.state.resumeData.Navigation} />
        <PV data={this.state.resumeData.PV} />
        <Features data={this.state.resumeData.Features} />
        <About data={this.state.resumeData.About} />
        <Members data={this.state.resumeData.Services} />
        <History data={this.state.resumeData.Services} />
        <Photos data={this.state.resumeData.Testimonials} />
        <Source data={this.state.resumeData.Team} />
      </div>
    );
  }
}

export default App;
