import React, { Component } from 'react';
import Slider from 'react-slick';
import Menu from './Menu';
import afi from './static/afi.png';
import ammaogafi from './static/ammaogafi.jpg';
import skutla from './static/skutla.jpg';
import steinn from './static/steinn.jpg';
import kubbaverk from './static/kubbaverk.jpg';
import './App.css';

class App extends Component {
  render() {
    const settings = {
      dots: true,
      arrow: true
    };
    return (
      <div className="App">
        <Menu />
        <div className="App__container">
          <div className="App__title">Guttormur Jónsson</div>
          <Slider {...settings}>
            <div>
              <img src={afi} />
            </div>
            <div>
              <img src={ammaogafi} />
            </div>
            <div>
              <img src={steinn} />
            </div>
            <div>
              <img src={skutla} />
            </div>
            <div>
              <img src={kubbaverk} />
            </div>
          </Slider>
          <div className="App__date">13.05.42 - 14.09.14</div>
        </div>
      </div>
    );
  }
}

export default App;
