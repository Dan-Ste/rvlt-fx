import React, { Component } from 'react';
import Slider from 'react-slick'
import AccountSlide from './AccountSlide'

export class AccountsSlider extends Component {
  render() {
    const {
      accounts,
      accountIdFrom,
      accountIdTo,
      isExchangeFrom,
      onSlideChange,
      sumToExchange,
      rates
    } = this.props;
    
    const accountFrom = accounts[accountIdFrom]
    const accountTo = accounts[accountIdTo]

    const currentSlideAccount = isExchangeFrom ?
      accountFrom :
      accountTo

    const settings = {
      dots: true,
      infinite: true,
      speed: 350,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
      initialSlide: Number(currentSlideAccount.id),
      afterChange(nextIdx) {
        onSlideChange(nextIdx)
      }
    }

    return (
      <Slider {...settings}>
        {accounts.map(account => {
          return <div key={account.id}>
                  <AccountSlide 
                    {...account} 
                    accountFrom={accountFrom} 
                    accountTo={accountTo} 
                    rates={rates} 
                    isExchangeFrom={isExchangeFrom}
                    sumToExchange={sumToExchange}
                  />
                </div>
        })}
      </Slider>
    )
  }
}

export default AccountsSlider