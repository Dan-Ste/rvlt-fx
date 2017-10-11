import React, { Component } from 'react'
import AccountsSliderContainer from '../containers/AccountsSliderContainer'
import SumFromInput from '../containers/SumFromInput'
import ApplyExchangeContainer from '../containers/ApplyExchangeContainer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <SumFromInput/>
        <ApplyExchangeContainer/>
        <AccountsSliderContainer isExchangeFrom={true}/>
        <AccountsSliderContainer />
      </div>
    )
  }
}
export default App