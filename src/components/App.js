import React, { Component } from 'react';
import ExchangeFromSlider from '../containers/ExchangeFromSlider';
import ExchangeToSlider from '../containers/ExchangeToSlider';
import ExchangeSumInput from '../containers/ExchangeSumInput';

class App extends Component {
  render() {

    return (
      <div className="app">
        <ExchangeSumInput/>
        <ExchangeFromSlider />
        <ExchangeToSlider />
      </div>
    );
  }
}
export default App;