import React, { Component } from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import convertMoneyByRate from '../utils/convertMoneyByRate'
import MoneyInputContainer from '../containers/MoneyInputContainer'
import '../styles/account-slide.css'

function ExchangeMoney({moneyFrom, moneyTo}) {
  if (moneyTo && moneyFrom) {

    const exchangeMoney = moneyTo === moneyFrom ?
      moneyTo :
      moneyTo.toFixed(2)

    return (
      <div className="exchange-money">
        {`+${exchangeMoney}`}
      </div>
    )
  } else {
    return null
  }
}

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
      rateFromTo,
      rateToFrom,
      isExchangeFrom,
      moneyTo,
      moneyFrom,
      errorMessage,
      setAccountIdFrom,
      setAccountIdTo,
      setMoneyTo,
      resetErrorMessage
    } = this.props

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

        resetErrorMessage()
        setMoneyTo(convertMoneyByRate(moneyFrom, rateFromTo))
      }
    }

    let rateElem
    let withArrow

    if (!isExchangeFrom) {
      rateElem = this.buildRateElem(accountTo.currencySign, accountFrom.currencySign, rateFromTo)

      withArrow = {
        clipPath: 'polygon(0% 0%, 46% 0, 50% 4%, 54% 0, 100% 0, 100% 100%, 0 100%)',
        backgroundColor: 'rgba(0, 0, 0, 0.15)'
      }
    } else {
      rateElem = this.buildRateElem(accountFrom.currencySign, accountTo.currencySign, rateToFrom)
    }

    return (
      <div className="slider">
        
        <Slider {...sliderSettings}>
          {accounts.map(account => {
            return  <div key={account.id}>
                      <div className="account-slide" style={withArrow}>
                        <div className="money-row">
                          <div className="account-currency">{account.currencyISO}</div>
                          {isExchangeFrom ? <MoneyInputContainer/> : <ExchangeMoney moneyFrom={moneyFrom} moneyTo={moneyTo}/>}
                        </div>
                        <div className="info-row">
                          <div className="account-amount">
                            You have <span className="currency-sign">{account.currencySign}</span>{account.amount.toFixed(2)}
                          </div>
                          <div className="exchange-rate">{rateElem}</div>
                        </div>
                          {!isExchangeFrom && <div className="error-message">{errorMessage}</div>}
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
  rateToFrom: PropTypes.number,
  rateToTo: PropTypes.number,
  isExchangeFrom: PropTypes.bool,
  moneyTo: PropTypes.number,
  moneyFrom: PropTypes.number,
  errorMessage: PropTypes.string,
  setAccountIdFrom: PropTypes.func,
  setAccountIdTo: PropTypes.func,
  setMoneyTo: PropTypes.func,
  resetErrorMessage: PropTypes.func
}

export default AccountsSlider