import React, { Component } from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import convertSumByRate from '../utils/convertSumByRate'
import MoneyFromInputContainer from '../containers/MoneyFromInputContainer'
import '../styles/account-slide.css'

export class AccountsSlider extends Component {
  buildRateElem(fromSign, toSign, rate) {
    if (!rate) {
      return ''
    } else {

      return (
        <div>
          <span className="currency-sign">{fromSign}</span>
          1&nbsp;=&nbsp; 
          <span className="currency-sign">{toSign}</span>
          {rate.toFixed(4)}
        </div>
      )
    }
  }

  render() {
    const {
      accounts,
      accountFrom,
      accountTo,
      rates,
      isExchangeFrom,
      sumTo,
      sumFrom,
      setAccountIdFrom,
      setAccountIdTo,
      setSumTo
    } = this.props

    const rateToFrom = rates[accountTo.currencyISO][accountFrom.currencyISO]
    const rateFromTo = rates[accountFrom.currencyISO][accountTo.currencyISO]
    const currentAccount = isExchangeFrom ?
      accountFrom :
      accountTo

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 350,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      initialSlide: currentAccount.id,
      afterChange(idx) {
        if (isExchangeFrom) {
          setAccountIdFrom(idx)
        } else {
          setAccountIdTo(idx)
        }

        setSumTo(convertSumByRate(sumFrom, rateFromTo))
      }
    }

    let rateElem
    let convertedSum

    if (!isExchangeFrom) {
      rateElem = this.buildRateElem(accountTo.currencySign, accountFrom.currencySign, rateFromTo)

      if (sumTo && sumFrom) {
        convertedSum = sumTo === sumFrom ?
          sumTo :
          sumTo.toFixed(2)

        convertedSum = `+${convertedSum}`
      }
    } else {
      rateElem = this.buildRateElem(accountFrom.currencySign, accountTo.currencySign, rateToFrom)
    }

    return (
      <div className="slider">
        
        <Slider {...sliderSettings}>
          {accounts.map(account => {
            return  <div key={account.id}>
                      <div className="account-slide">
                        <div className="money-row">
                          <div className="account-currency">{account.currencyISO}</div>
                          {isExchangeFrom ? <MoneyFromInputContainer/> : <div className="exchange-money">{convertedSum}</div>}
                        </div>
                        <div className="info-row">
                          <div className="account-amount">
                            You have <span className="currency-sign">{account.currencySign}</span>{account.amount.toFixed(2)}
                          </div>
                          <div className="exchange-rate">{rateElem}</div>
                        </div>
                      </div>
                    </div>
          })}
        </Slider>
      </div>
    )
  }
}

AccountsSlider.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.object),
  accountFrom: PropTypes.object,
  accountTo: PropTypes.object,
  rates: PropTypes.object,
  isExchangeFrom: PropTypes.bool,
  sumTo: PropTypes.number,
  sumFrom: PropTypes.number,
  setAccountIdFrom: PropTypes.func,
  setAccountIdTo: PropTypes.func,
  setSumTo: PropTypes.func
}

export default AccountsSlider