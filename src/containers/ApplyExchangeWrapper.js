import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { subtractMoneyFromAccount, addMoneyToAccount } from '../actions/accounts'
import { resetSumFrom, resetSumTo } from '../actions/exchange'
import { setNotEnoughMoneyError } from '../actions/errorMessage'

function ApplyExchangeWrapper(ComposedComponent) {
  class ApplyExchange extends Component {
    constructor() {
      super();

      this.applyExchange = this.applyExchange.bind(this);
    }

    applyExchange() {
      const {
        sumFrom,
        sumTo,
        accountFrom,
        accountIdTo,

        boundSetNotEnoughMoneyError,
        boundSubtractMoneyFromAccount,
        boundAddMoneyToAccount,
        boundResetSumFrom,
        boundResetSumTo
      } = this.props

      // if there is not enough money on the account, dispatch an error
      if (accountFrom.amount - sumFrom < 0) {
        boundSetNotEnoughMoneyError("You don't have enough money for exchange")
      } else {

        boundSubtractMoneyFromAccount(accountFrom.id, sumFrom)
        boundAddMoneyToAccount(accountIdTo, sumTo)

        boundResetSumFrom()
        boundResetSumTo()
      }
    }

    render() {
      return (
        <ComposedComponent 
          {...this.props}
          applyExchange={ this.applyExchange }
        />
      );
    }
  }

  ApplyExchange.PropTypes = {
    sumFrom: PropTypes.number,
    sumTo: PropTypes.number,
    accountFrom: PropTypes.object,
    accountIdTo: PropTypes.number,
    subtractMoney: PropTypes.func,
    addMoney: PropTypes.func,
    resetSumFrom: PropTypes.func,
    resetSumTo: PropTypes.func,
    onError: PropTypes.func,
  }

  const mapStateToProps = ({ sumFrom, sumTo, accounts, accountIdFrom, accountIdTo }) => {
    const accountFrom = accounts[accountIdFrom]

    return {
      sumFrom,
      sumTo,
      accountFrom,
      accountIdTo
    }
  }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      boundSubtractMoneyFromAccount: subtractMoneyFromAccount,
      boundAddMoneyToAccount: addMoneyToAccount,
      boundResetSumFrom: resetSumFrom,
      boundResetSumTo: resetSumTo,
      boundSetNotEnoughMoneyError: setNotEnoughMoneyError
    }, dispatch);
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ApplyExchange)
}

export default ApplyExchangeWrapper