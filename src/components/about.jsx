import React, { Component } from 'react';

export class about extends Component {
  render() {
    return (
      <div id="about" className="section py-5" data-aos="fade-up">
        <div className="container">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-8 col-sm-10">
              <div className="about-text" data-aos="fade-up">
                <div>
                  {this.props.data ? this.props.data.paragraph_jp.map((d, i) => (
                    <p key={`${d}-${i}`}>{d}</p>
                  )) : 'loading'}
                </div>
                {/* <div>
                  {this.props.data ? this.props.data.paragraph_en.map((d, i) => (
                    <p key={`${d}-${i}`}>{d}</p>
                  )) : 'loading'}
                </div>     */}
                <div className="list-style">
                    <ul>
                      {this.props.data
                        ? this.props.data.Member.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : 'loading'}
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default about;
