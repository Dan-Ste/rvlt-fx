import React, { Component } from 'react'
import AccountsSliderContainer from '../containers/AccountsSliderContainer'
import ApplyExchangeButton from '../components/ApplyExchangeButton'

class App extends Component {
  render() {
    return (
      <div className="app">
        <ApplyExchangeButton/>
        <AccountsSliderContainer isExchangeFrom={true}/>
        <AccountsSliderContainer />
      </div>
    )
  }
}

export default App