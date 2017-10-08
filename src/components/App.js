import React, { Component } from 'react'
import AccountsSliderContainer from '../containers/AccountsSliderContainer'
import SumFromInput from '../containers/SumFromInput'
import ApplyExchangeButton from '../containers/ApplyExchangeButton'

class App extends Component {
  render() {

    return (
      <div className="app">
        <SumFromInput/>
        <ApplyExchangeButton/>
        <AccountsSliderContainer isExchangeFrom={true}/>
        <AccountsSliderContainer />
      </div>
    )
  }
}
export default App