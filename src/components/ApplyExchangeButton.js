import React, { Component } from 'react'
import ApplyExchangeWrapper from '../containers/ApplyExchangeWrapper'
import PropTypes from 'prop-types'

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
        className="apply-exchange" 
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