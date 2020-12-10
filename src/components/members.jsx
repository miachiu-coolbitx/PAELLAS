import React, { Component } from 'react';
import PV from './pv';

export class Members extends Component {
  render() {
    const video_id = 'buabL8wjMmQ';
    return (
      <div className="section">
        <PV video_id={video_id} />
        <div id="members">
          <div className="container h-100">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h2>Our members</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit duis
                    sed dapibus leonec.
                  </p>
                </div>
              </div>
              {this.props.data
                ? this.props.data.map((d, i) => (
                    <div key={`${d.name}-${i}`} className="col-md-4">
                      {' '}
                      <i className={d.icon}></i>
                      <div className="service-desc">
                        <h3>{d.name}</h3>
                        <p>{d.text}</p>
                      </div>
                    </div>
                  ))
                : 'loading'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Members;
