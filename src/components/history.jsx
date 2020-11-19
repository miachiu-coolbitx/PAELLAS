import React, { Component } from 'react';

export class History extends Component {
  render() {
    return (
      <div id="history" className="section">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12">
              <div className="section-title">
                <h2>History</h2>
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
    );
  }
}

export default History;
