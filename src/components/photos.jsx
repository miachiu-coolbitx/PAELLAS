import React, { Component } from 'react';

export class Photos extends Component {
  render() {
    return (
      <div id="photos" className="section">
        <div className="container">
          <div className="row h-100">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>Photos</h2>
              </div>
            </div>
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {' '}
                        <img src={d.img} alt="" />{' '}
                      </div>
                      <div className="testimonial-content">
                        <p>"{d.text}"</p>
                        <div className="testimonial-meta"> - {d.name} </div>
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

export default Photos;
