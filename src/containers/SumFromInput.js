import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSumFrom, setSumTo } from '../actions/exchange'
import convertSumByRate from '../utils/convertSumByRate'

class SumFromInput extends Component {
  constructor(props) {
    super(props);

    this.focusInput = this.focusInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  focusInput() {
    this.refs.exchangeInput.focus()
  }

  componentDidMount() {
    this.focusInput()
  }

  componentDidUpdate() {
    this.handleChange()
  }

  handleChange() {
    const {
      rateFromTo,
      setExchangeSums
    } = this.props;

    const sumFrom = Number(this.refs.exchangeInput.value)
    const sumTo = convertSumByRate(sumFrom, rateFromTo)

    setExchangeSums(sumFrom, sumTo)
  }

  render() {
    return (
      <input 
        ref="exchangeInput"
        type="number"
        className="exchange-input"
        max={5}
        onBlur={this.focusInput}
        onChange={this.handleChange}
      />
    )
  }
}

const mapStateToProps = ({ accounts, accountIdFrom, accountIdTo, rates }) => {
  const accountFrom = accounts[accountIdFrom]
  const accountTo = accounts[accountIdTo]
  const rateFromTo = rates[accountFrom.currencyISO][accountTo.currencyISO]

  return {
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