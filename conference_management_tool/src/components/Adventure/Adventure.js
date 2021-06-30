import React, { Component } from 'react';
import Resort1 from '../../images/banner4.jpg';
import Resort2 from '../../images/banner5.jpg';
import Resort3 from '../../images/banner8.jpg';
import { HashLink as Link } from 'react-router-hash-link';

class Popular extends Component {
  render() {
    return (
      <section id="adventure" className="section section-popular scrollspy">
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="purple-text darken-1">AirPnP</span> Adventures</h4>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Resort1} alt="" />
                  <span className="card-title">Cuba</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple" href="#"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
                    delectus?
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Cuba<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trip</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Resort2} alt="" />
                  <span className="card-title">Halong Bay</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
                    delectus?
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Halong Bay<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trip</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Resort3} alt="" />
                  <span className="card-title">Costa Rica</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
                    delectus?
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Costa Rica<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trip</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col s12 center">
              <a href="#contact" className="btn btn-large grey darken-3">
                <i className="material-icons left">send</i> Contact For Booking
              </a>
            </div>
          </div> */}
        </div>
      </section>
    );
  }
}

export default Popular;