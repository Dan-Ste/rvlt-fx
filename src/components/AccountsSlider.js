import React from 'react'
import { Component } from 'react';
import Slider from 'react-slick';
import AccountSlide from './AccountSlide';

export class AccountsSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
      afterChange(index) {
        console.log(index)
      }
    };

    return (
      <Slider {...settings}>
        {this.props.accounts.map(account => {
          return <div key={account.id}>
                  <AccountSlide {...account}/>
                </div>
        })}
      </Slider>
    )
  }
}

export default AccountsSlider;