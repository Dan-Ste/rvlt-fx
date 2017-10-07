import React from 'react'
import { Component } from 'react';

export class AccountSlide extends Component {

  render() {
    const {currencyISO, currencySign, amount} = this.props;

    return (
      <div className="currency-slide">
        <div>{currencyISO}</div>
        <div>You have {currencySign}{amount}</div>
      </div>
    )
  }
}

export default AccountSlide;