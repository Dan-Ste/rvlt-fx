import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAccountAmount } from '../actions/accounts'

class ExchangeButton extends Component {
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
      updateAccAmount
    } = this.props

    updateAccAmount(accountIdFrom, sumFrom)
    updateAccAmount(accountIdTo, sumTo)
  }

  render() {
    return (
      <div 
        className="apply-exchange" 
        onClick={this.applyExchange}>
          Exchange
      </div>
    )
  }
}

const mapStateToProps = ({ sumFrom, sumTo, accountIdFrom, accountIdTo }) => {
  return {
    sumFrom,
    sumTo,
    accountIdFrom,
    accountIdTo
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateAccAmount: (accountId, amount) => {
    dispatch(updateAccountAmount(accountId, amount))
  }
})

const ApplyExchangeButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeButton)

export default ApplyExchangeButton