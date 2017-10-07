import React, { Component } from 'react';
import StuffList from './components/stuffList';
import Slider from 'react-slick';

class App extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true
    };

    return (
      <div className="app">
        <div>
          <Slider {...settings}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
          </Slider>
        </div>

        <div>
          <Slider {...settings}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
          </Slider>
        </div>
      </div>
    );
  }
}
export default App;