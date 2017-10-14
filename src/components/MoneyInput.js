import React, { Component } from 'react'
import CurrencyInput from 'react-currency-input'
import convertSumByRate from '../utils/convertSumByRate'
import ApplyExchangeWrapper from '../containers/ApplyExchangeWrapper'
import PropTypes from 'prop-types'

class MoneyInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp({ keyCode }) {
    if (keyCode === 13) {
      this.props.applyExchange()
    }
  }

  handleChange(event, maskedValue, sumFrom) {
    const {
      rateFromTo,
      setSumFrom,
      setSumTo,
      resetErrorMessage
    } = this.props;

    const sumTo = convertSumByRate(sumFrom, rateFromTo)

    resetErrorMessage()

    setSumFrom(sumFrom)
    setSumTo(sumTo)
  }

  render() {
    return (
      <CurrencyInput 
        value={this.props.sumFrom} 
        allowEmpty={true} 
        prefix="-" 
        ref="exchangeInput" 
        className="exchange-input" 
        onChangeEvent={this.handleChange}
        onKeyUp={this.onKeyUp}
        max={"100"}
      />
    )
  }
}

MoneyInput.propTypes = {
  rateFromTo: PropTypes.number,
  setSumTo: PropTypes.func,
  setSumFrom: PropTypes.func,
  resetErrorMessage: PropTypes.func,
  applyExchange: PropTypes.func
}

export default ApplyExchangeWrapper(MoneyInput)