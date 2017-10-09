import React, { Component } from 'react'

class ApplyExchangeButton extends Component {
  constructor(props) {
    super(props)

    this.applyExchange = this.applyExchange.bind(this)
  }

  applyExchange() {
    const {
      sumFrom,
      sumTo,
      accountIdFrom,
      accountIdTo,
      subtractSum,
      addSum,
      resetExchangeSums
    } = this.props

    subtractSum(accountIdFrom, sumFrom)
    addSum(accountIdTo, sumTo)

    resetExchangeSums()
  }

  render() {
    return (
      <button
        disabled={!this.props.sumFrom || !this.props.sumTo}
        className="apply-exchange" 
        onClick={this.applyExchange}>
          Exchange
      </button>
    )
  }
}

export default ApplyExchangeButton