import React, { Component } from 'react'
import AccountsSliderContainer from '../containers/AccountsSliderContainer'
import ApplyExchangeButton from '../components/ApplyExchangeButton'
import '../styles/app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <ApplyExchangeButton/>
        <AccountsSliderContainer isExchangeFrom={true}/>
        <div className="arrow-clip">
          <AccountsSliderContainer />
        </div>
      </div>
    )
  }
}

export default App