import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ExchangeRate extends Component {
  render() {
    const {
      fromSign,
      toSign,
      rate
    } = this.props

    if (rate) {
      return (
        <div className="exchange-rate">
          <span className="currency-sign">{fromSign}</span>
          1&nbsp;=&nbsp; 
          <span className="currency-sign">{toSign}</span>
          {rate.toFixed(4)}
        </div>
      )
    } else {
      return null
    }
  }
}

export default ExchangeRate