import React, { Component } from 'react';

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-expand-sm">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-center py-3 w-100">
            <h1 className="mr-md-auto">PAELLAS</h1>
            <nav>
              <a href="#about">about</a>
              <a href="#members">members</a>
              <a href="#history">history</a>
              <a href="#photos">photos</a>
              <a href="#source">source</a>
            </nav>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
