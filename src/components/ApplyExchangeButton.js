import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

ApplyExchangeButton.PropTypes = {
  sumFrom: PropTypes.number,
  sumTo: PropTypes.number,
  accountIdFrom: PropTypes.number,
  accountIdTo: PropTypes.number,
  subtractSum: PropTypes.func,
  addSum: PropTypes.func,
  resetExchangeSums: PropTypes.func
}

export default ApplyExchangeButton