import React, { Component } from 'react'
import ApplyExchangeWrapper from '../containers/ApplyExchangeWrapper'

class ApplyExchangeButton extends Component {
  render() {
    return (
      <button
        disabled={!this.props.moneyFrom || !this.props.moneyTo}
        className="apply-exchange" 
        onClick={this.props.applyExchange}>
          Exchange
      </button>
    )
  }
}

export default ApplyExchangeWrapper(ApplyExchangeButton);