import React, { Component } from 'react';
import ExchangeFromSlider from '../containers/ExchangeFromSlider';

class App extends Component {
  render() {

    return (
      <div className="app">
          <ExchangeFromSlider />
          <ExchangeFromSlider />
      </div>
    );
  }
}
export default App;