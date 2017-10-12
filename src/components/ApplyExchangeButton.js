import React, { Component } from 'react'
import ApplyExchangeWrapper from '../containers/ApplyExchangeWrapper'

class ApplyExchangeButton extends Component {
  render() {
    return (
      <button
        disabled={!this.props.sumFrom || !this.props.sumTo}
        className="apply-exchange" 
        onClick={this.props.applyExchange}>
          Exchange
      </button>
    )
  }
}

export default ApplyExchangeWrapper(ApplyExchangeButton);