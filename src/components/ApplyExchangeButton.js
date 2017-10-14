import React, { Component } from 'react'
import ApplyExchangeWrapper from '../containers/ApplyExchangeWrapper'
import PropTypes from 'prop-types'
import '../styles/apply-exchange-button.css'

class ApplyExchangeButton extends Component {
  render() {
    const {
      moneyFrom,
      moneyTo,
      applyExchange
    } = this.props;

    return (
      <button
        disabled={!moneyFrom || !moneyTo}
        className="apply-exchange-button" 
        onClick={applyExchange}>
          Exchange
      </button>
    )
  }
}

ApplyExchangeButton.propTypes = {
  moneyFrom: PropTypes.number,
  moneyTo: PropTypes.number,
  applyExchange: PropTypes.func
}

export default ApplyExchangeWrapper(ApplyExchangeButton);