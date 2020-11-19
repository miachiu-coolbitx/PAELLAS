import React, { Component } from 'react';
import YouTube from 'react-youtube';

export class PV extends Component {
  render() {
    const fixed = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      Zindex: -99,
    };
    const overlay = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0)',
      Zindex: -1,
    };
    const overlay_top = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '80px',
      backgroundColor: 'rgba(0,0,0,1)',
      Zindex: -88,
    };
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        loop: 1,
        modestbranding: 1,
        playlist: 'buabL8wjMmQ, UWG8qVylsBc', //DquS6xxX9Tk , buabL8wjMmQ
      },
    };

    return (
      <div style={fixed}>
        <div style={overlay}></div>
        <div style={overlay_top}></div>
        <YouTube videoId="DquS6xxX9Tk" opts={opts} />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default PV;
