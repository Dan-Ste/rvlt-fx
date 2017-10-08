import React, { Component } from 'react';
import { connect } from 'react-redux'
import setSumToExchange from '../actions/exchange'

class ExchangeInput extends Component {
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

  handleChange() {
    this.props.onChange(this.refs.exchangeInput.value)
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

const mapStateToProps = ({ sumToExchange }) => {
  return {
    sumToExchange
  }
}

const mapDispatchToProps = (dispatch) => ({
  onChange: (sum) => {
    dispatch(setSumToExchange(sum))
  }
})

const SumToExchangeInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeInput)

export default SumToExchangeInput