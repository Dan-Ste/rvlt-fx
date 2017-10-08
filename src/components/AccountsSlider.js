import React, { Component } from 'react';
import Slider from 'react-slick'

export class AccountsSlider extends Component {
  buildRateString(fromSign, toSign, rate) {
    if (!rate) {
      return ''
    } else {

      return (
        <div>
          <span className="currency-sign">{fromSign}</span>
          1 = {rate.toFixed(4)}
          <span className="currency-sign">{toSign}</span>
        </div>
      )
    }
  }

  showConvertedSum(sumToExchange, rate) {
    if (sumToExchange) {
      if (rate) {
        return <div>{`+${sumToExchange}`}</div>
      } else {
        const exchangedSum = (sumToExchange * rate)
          .toFixed(2)

        return <div>{`+${exchangedSum}`}</div>
      }
    } else {
      return ''
    }
  }

  render() {
    const {
      accounts,
      accountFrom,
      accountTo,
      rates,
      isExchangeFrom,
      sumToExchange,
      setAccountIdFrom,
      setAccountIdTo
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
      initialSlide: Number(currentAccount.id),
      afterChange(idx) {
        if (isExchangeFrom) {
          setAccountIdFrom(idx)
        } else {
          setAccountIdTo(idx)
        }
      }
    }

    let rateString
    let convertedSum

    if (!isExchangeFrom) {
      const rateToFrom = rates[accountTo.currencyISO][accountFrom.currencyISO]
      const rateFromTo = rates[accountFrom.currencyISO][accountTo.currencyISO]

      rateString = this.buildRateString(accountFrom.currencySign, accountTo.currencySign, rateToFrom)
      convertedSum = this.showConvertedSum(sumToExchange, rateFromTo)
    }

    return (
      <Slider {...sliderSettings}>
        {accounts.map(account => {
          return <div key={account.id} className="account-slide">
                  <div>{account.currencyISO}</div>
                  <div>You have {account.currencySign}{account.amount}</div>
                  {rateString}
                  {convertedSum}
                </div>
        })}
      </Slider>
    )
  }
}

export default AccountsSlider