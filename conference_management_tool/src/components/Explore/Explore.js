import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';


class Explore extends Component {
  render() {
    return (
      <section id="explore" className="section section-icons grey lighten-4 center">
        <div className="container">
          <div className="row">
          <h4 className="center">
              <span className="purple-text darken-1">Explore</span> AirPnP</h4>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium purple-text">hotel</i>
                <h4>Hotels</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <i class="material-icons medium purple-text">restaurant</i>
                <h4>Restaurant</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium purple-text">local_cafe</i>
                <h4>Coffee</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium purple-text">shopping_basket</i>
                <h4>Shopping</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Explore;