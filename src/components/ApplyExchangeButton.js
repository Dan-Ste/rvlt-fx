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
      accountFrom,
      accountIdTo,
      subtractMoney,
      addMoney,
      resetExchangeSums,
      onError
    } = this.props

    // if there is not enough money on the account, dispatch an error
    if (accountFrom.amount - sumFrom < 0) {
      onError("You don't have enough money for the exchange")
    } else {
      subtractMoney(accountFrom.id, sumFrom)
      addMoney(accountIdTo, sumTo)

      resetExchangeSums()
    }
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
  subtractMoney: PropTypes.func,
  addMoney: PropTypes.func,
  resetExchangeSums: PropTypes.func,
  onError: PropTypes.func,
}

export default ApplyExchangeButton