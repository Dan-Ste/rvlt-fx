import React from 'react'
import { Component } from 'react'

export class AccountSlide extends Component {

  buildRateString(accountFrom, accountTo, isExchangeFrom, rates) {
    let rate
    let currencyLeft
    let currencyRight
    const currencyISOFrom = accountFrom.currencyISO
    const currencyISOTo = accountTo.currencyISO
    const currencySignFrom = accountFrom.currencySign
    const currencySignTo = accountTo.currencySign

    if (currencyISOFrom === currencyISOTo) {
      return ''
    } else {
      if (isExchangeFrom) {
        rate = rates[currencyISOFrom][currencyISOTo]
        currencyLeft = currencySignFrom
        currencyRight = currencySignTo

      } else {
        rate = rates[currencyISOTo][currencyISOFrom]
        currencyLeft = currencySignTo
        currencyRight = currencySignFrom
      }

      return (
        <div>
          <span className="currency-sign">{currencyLeft}</span>
          1 = {rate.toFixed(4)}
          <span className="currency-sign">{currencyRight}</span>
        </div>
      )
    }
  }

  render() {
    const {
      currencyISO,
      currencySign,
      amount,
      accountFrom,
      accountTo,
      isExchangeFrom,
      rates
    } = this.props

    return (
      <div className="currency-slide">
        <div>{currencyISO}</div>
        <div>You have {currencySign}{amount}</div>
        <div>{this.buildRateString(accountFrom, accountTo, isExchangeFrom, rates)}</div>
      </div>
    )
  }
}

export default AccountSlide