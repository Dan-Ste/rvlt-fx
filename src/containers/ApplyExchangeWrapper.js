import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { subtractMoneyFromAccount, addMoneyToAccount } from '../actions/accounts'
import { resetMoneyFrom, resetMoneyTo } from '../actions/exchange'
import { setNotEnoughMoneyError } from '../actions/errorMessage'

function ApplyExchangeWrapper(ComposedComponent) {
  class ApplyExchange extends Component {
    constructor() {
      super();

      this.applyExchange = this.applyExchange.bind(this);
    }

    applyExchange() {
      const {
        moneyFrom,
        moneyTo,
        accountFrom,
        accountIdTo,

        boundSetNotEnoughMoneyError,
        boundSubtractMoneyFromAccount,
        boundAddMoneyToAccount,
        boundResetMoneyFrom,
        boundResetMoneyTo
      } = this.props

      // if there is not enough money on the account, dispatch an error
      if (accountFrom.amount - moneyFrom < 0) {
        boundSetNotEnoughMoneyError("You don't have enough money for exchange")
      } else {

        boundSubtractMoneyFromAccount(accountFrom.id, moneyFrom)
        boundAddMoneyToAccount(accountIdTo, moneyTo)
        
        boundResetMoneyFrom()
        boundResetMoneyTo()
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
    moneyFrom: PropTypes.number,
    moneyTo: PropTypes.number,
    accountFrom: PropTypes.object,
    accountIdTo: PropTypes.number,
    subtractMoney: PropTypes.func,
    addMoney: PropTypes.func,
    resetMoneyFrom: PropTypes.func,
    resetMoneyTo: PropTypes.func,
    onError: PropTypes.func,
  }

  const mapStateToProps = ({ moneyFrom, moneyTo, accounts, accountIdFrom, accountIdTo }) => {
    const accountFrom = accounts.find(account => account.id === accountIdFrom)
    
    return {
      moneyFrom,
      moneyTo,
      accountFrom,
      accountIdTo
    }
  }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      boundSubtractMoneyFromAccount: subtractMoneyFromAccount,
      boundAddMoneyToAccount: addMoneyToAccount,
      boundResetMoneyFrom: resetMoneyFrom,
      boundResetMoneyTo: resetMoneyTo,
      boundSetNotEnoughMoneyError: setNotEnoughMoneyError
    }, dispatch);
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ApplyExchange)
}

export default ApplyExchangeWrapper