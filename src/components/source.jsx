import React, { Component } from 'react';

export class Source extends Component {
  render() {
    return (
      <div id="source" className="section">
        <div className="container">
          <div className="row h-100">
            <div class="col-12">
              <h2>Source</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                dapibus leonec.
              </p>
            </div>
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-3 col-6 team">
                    <div className="thumbnail">
                      {' '}
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    );
  }
}

export default Source;
