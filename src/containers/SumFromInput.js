import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSumFrom, setSumTo } from '../actions/exchange'
import convertSumByRate from '../utils/convertSumByRate'
import CurrencyInput from 'react-currency-input';

class SumFromInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event, maskedValue, sumFrom) {
    const {
      rateFromTo,
      setExchangeSums
    } = this.props;

    const sumTo = convertSumByRate(sumFrom, rateFromTo)
    console.log(sumFrom,sumTo)
    setExchangeSums(sumFrom, sumTo)
  }

  render() {
    return (
      <CurrencyInput 
        value={this.props.sumFrom} 
        allowEmpty={true} 
        prefix="-" 
        ref="exchangeInput" 
        className="exchange-input" 
        onChangeEvent={this.handleChange}/>  
    )
  }
}

const mapStateToProps = ({ accounts, accountIdFrom, accountIdTo, rates, sumFrom }) => {
  const accountFrom = accounts[accountIdFrom]
  const accountTo = accounts[accountIdTo]
  const rateFromTo = rates[accountFrom.currencyISO][accountTo.currencyISO]

  return {
    sumFrom,
    rateFromTo
  }
}

const mapDispatchToProps = dispatch => ({
  setExchangeSums: (sumFrom, sumTo) => {
    dispatch(setSumFrom(sumFrom))
    dispatch(setSumTo(sumTo))
  }
})

const SumFromInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SumFromInput)

export default SumFromInputContainer