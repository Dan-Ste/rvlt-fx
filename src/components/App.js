import React, { Component } from 'react';
import ExchangeFromSlider from '../containers/ExchangeFromSlider';
import ExchangeToSlider from '../containers/ExchangeToSlider';


class App extends Component {
  render() {

    return (
      <div className="app">
        <ExchangeFromSlider />
        <ExchangeToSlider />
      </div>
    );
  }
}
export default App;