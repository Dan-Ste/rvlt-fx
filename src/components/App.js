import React, { Component } from 'react';
import AccountsSliderContainer from '../containers/AccountsSliderContainer';
import SumToExchangeInput from '../containers/SumToExchangeInput';

class App extends Component {

  render() {

    return (
      <div className="app">
        <SumToExchangeInput/>
        <AccountsSliderContainer isExchangeFrom={true}/>
        <AccountsSliderContainer />
      </div>
    );
  }
}
export default App;