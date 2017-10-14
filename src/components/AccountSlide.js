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

    return (
      <div className="account-slide">
        <div className="money-row">
          <div>{currencyISO}</div>
          {isExchangeFrom ? (
            <MoneyInputContainer/> 
          ) : (
            <ExchangeMoney moneyFrom={moneyFrom} moneyTo={moneyTo}/>
          )}
        </div>
        <div className="info-row">
          <div>
            You have <span className="currency-sign">{currencySign}</span>{amount.toFixed(2)}
          </div>
          {isExchangeFrom ? (
            <ExchangeRate fromSign={accountFrom.currencySign} toSign={accountTo.currencySign} rate={rateFromTo}/>
          ) : (
            <ExchangeRate fromSign={accountTo.currencySign} toSign={accountFrom.currencySign} rate={rateToFrom}/>
          )}
        </div>
          {!isExchangeFrom && errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    )
  }
}

AccountsSlider.propTypes = {
  account: PropTypes.object.isRequired,
  accountTo: PropTypes.object.isRequired,
  accountFrom: PropTypes.object.isRequired,
  moneyFrom: PropTypes.number,
  moneyTo: PropTypes.number,
  rateFromTo: PropTypes.number,
  rateToFrom: PropTypes.number,
  errorMessage: PropTypes.string,
  isExchangeFrom: PropTypes.bool
}

export default AccountsSlider