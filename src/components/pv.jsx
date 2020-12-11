import React, { Component } from 'react';
import YouTube from 'react-youtube';

export class PV extends Component {
  render(props) {
    const video_id = props;
    const fixed = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      Zindex: -99,
    };
    const overlay = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0)',
      Zindex: -77,
    };
    const overlay_top = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '80px',
      backgroundColor: 'rgba(0,0,0,1)',
      Zindex: -88,
    };

    //const video_id = "DquS6xxX9Tk";
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        loop: 1,
        modestbranding: 1,
        //playlist: 'buabL8wjMmQ, UWG8qVylsBc', DquS6xxX9Tk , buabL8wjMmQ
      },
    };

    return (
      <div style={fixed}>
        <div style={overlay}></div>
        <div style={overlay_top}></div>
        <YouTube
          videoId={this.props.video_id}
          opts={opts}
          onPause={this._onPause}
        />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  _onPause(event) {
    // access to player in all event handlers via event.target
    window.addEventListener('scroll', function () {
      event.target.pauseVideo();
    });
  }

  // _stopVideo(event) {
  //   // access to player in all event handlers via event.target
  //   if (event.data == YT.PlayerState.PLAYING && !done) {
  //     player.stopVideo();
  //   }
  // }
}

export default PV;
