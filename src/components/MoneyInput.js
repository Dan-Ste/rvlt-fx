import React, { Component } from 'react'
import CurrencyInput from 'react-currency-input'
import convertMoneyByRate from '../utils/convertMoneyByRate'
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

  handleChange(event, maskedValue, moneyFrom) {
    const {
      rateFromTo,
      setMoneyFrom,
      setMoneyTo,
      resetErrorMessage
    } = this.props;

    const moneyTo = convertMoneyByRate(moneyFrom, rateFromTo)

    resetErrorMessage()

    setMoneyFrom(moneyFrom)
    setMoneyTo(moneyTo)
  }

  render() {
    return (
      <CurrencyInput 
        value={this.props.moneyFrom} 
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
  setMoneyTo: PropTypes.func,
  setMoneyFrom: PropTypes.func,
  resetErrorMessage: PropTypes.func,
  applyExchange: PropTypes.func
}

export default ApplyExchangeWrapper(MoneyInput)