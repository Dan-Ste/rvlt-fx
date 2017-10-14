import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/exchange-money.css'

class ExchangeMoney extends Component {
  render() {
    const {
      moneyFrom,
      moneyTo
    } = this.props

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
}

ExchangeMoney.propTypes = {
  moneyFrom: PropTypes.number,
  moneyTo: PropTypes.number
}

export default ExchangeMoney