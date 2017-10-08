import React, { Component } from 'react';
import Slider from 'react-slick'

export class AccountsSlider extends Component {
  buildRateElem(fromSign, toSign, rate) {
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

    let rateElem
    let convertedSum

    if (!isExchangeFrom) {
      const rateToFrom = rates[accountTo.currencyISO][accountFrom.currencyISO]

      rateElem = this.buildRateElem(accountFrom.currencySign, accountTo.currencySign, rateToFrom)

      if (sumTo && sumFrom) {
        convertedSum = sumTo === sumFrom ?
          sumTo :
          Number(sumTo)
          .toFixed(2);

        convertedSum = `+${convertedSum}`
      }
    }

    return (
      <Slider {...sliderSettings}>
        {accounts.map(account => {
          return <div key={account.id} className="account-slide">
                  <div>{account.currencyISO}</div>
                  <div>You have {account.currencySign}{Number(account.amount).toFixed(2)}</div>
                  {rateElem}
                  {convertedSum}
                </div>
        })}
      </Slider>
    )
  }
}

export default AccountsSlider