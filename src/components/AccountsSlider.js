import React, { Component } from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import convertMoneyByRate from '../utils/convertMoneyByRate'
import '../styles/account-slide.css'
import AccountSlideContainer from '../containers/AccountSlideContainer'

export class AccountsSlider extends Component {
  render() {
    const {
      accounts,
      accountFrom,
      accountTo,
      rateFromTo,
      isExchangeFrom,
      moneyFrom,
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
        resetErrorMessage()

        if (isExchangeFrom) {
          setAccountIdFrom(idx)
        } else {
          setAccountIdTo(idx)
        }

        console.log('slider-comp', moneyFrom, accountFrom.currencyISO, accountTo.currencyISO, rateFromTo)
        setMoneyTo(convertMoneyByRate(moneyFrom, rateFromTo))
      }
    }

    return (
      <Slider {...sliderSettings}>
        {accounts.map(account => {
          return  <div key={account.id} >
                    <AccountSlideContainer 
                      account={account}
                      isExchangeFrom={isExchangeFrom}
                    />
                  </div>
        })}
      </Slider>
    )
  }
}

AccountsSlider.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.object),
  accountFrom: PropTypes.object,
  accountTo: PropTypes.object,
  rateToTo: PropTypes.number,
  isExchangeFrom: PropTypes.bool,
  moneyFrom: PropTypes.number,
  setAccountIdFrom: PropTypes.func,
  setAccountIdTo: PropTypes.func,
  setMoneyTo: PropTypes.func,
  resetErrorMessage: PropTypes.func
}

export default AccountsSlider