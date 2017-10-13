import React, { Component } from 'react'
import AccountsSliderContainer from '../containers/AccountsSliderContainer'
import MoneyFromInputContainer from '../containers/MoneyFromInputContainer'
import ApplyExchangeButton from '../components/ApplyExchangeButton'

class App extends Component {
  render() {
    return (
      <div className="app">
        <MoneyFromInputContainer/>
        <ApplyExchangeButton/>
        <AccountsSliderContainer isExchangeFrom={true}/>
        <AccountsSliderContainer />
      </div>
    )
  }
}

export default App