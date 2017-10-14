import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MoneyInputContainer from '../containers/MoneyInputContainer'
import ExchangeMoney from './ExchangeMoney'
import ExchangeRate from './ExchangeRate'

class AccountsSlider extends Component {
  render() {
    const {
      account,
      accountTo,
      accountFrom,
      moneyFrom,
      moneyTo,
      rateFromTo,
      rateToFrom,
      errorMessage,
      isExchangeFrom
    } = this.props

    const {
      currencyISO,
      currencySign,
      amount
    } = account

    const withArrow = !isExchangeFrom ? {
      clipPath: 'polygon(0% 0%, 46% 0, 50% 4%, 54% 0, 100% 0, 100% 100%, 0 100%)',
      backgroundColor: 'rgba(0, 0, 0, 0.15)'
    } :
    null

    return (
      <div className="account-slide" style={withArrow}>
        <div className="money-row">
          <div className="account-currency">{currencyISO}</div>
          {isExchangeFrom ? (
            <MoneyInputContainer/> 
          ) : (
            <ExchangeMoney moneyFrom={moneyFrom} moneyTo={moneyTo}/>
          )}
        </div>
        <div className="info-row">
          <div className="account-amount">
            You have <span className="currency-sign">{currencySign}</span>{amount.toFixed(2)}
          </div>
          {isExchangeFrom ? (
            <ExchangeRate fromSign={currencySign} toSign={accountTo.currencySign} rate={rateFromTo}/>
          ) : (
            <ExchangeRate fromSign={currencySign} toSign={accountFrom.currencySign} rate={rateToFrom}/>
          )}
        </div>
          {!isExchangeFrom && errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    )
  }
}

export default AccountsSlider