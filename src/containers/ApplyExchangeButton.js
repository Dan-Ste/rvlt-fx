import React, { Component } from 'react';
import { connect } from 'react-redux'
import setSumToExchange from '../actions/exchange'

class ExchangeButton extends Component {
  constructor(props) {
    super(props)

    this.applyExchange = this.applyExchange.bind(this)
  }

  applyExchange() {
    const {
      sumToExchange,
      accountFrom,
      accountTo
    } = this.props


  }

  render() {
    return (
      <div 
        className="apply-exchange" 
        onClick={this.applyExchange}>
          Exchange
      </div>
    )
  }
}

const mapStateToProps = ({ sumToExchange, accountIdFrom, accountIdTo }) => {
  return {
    sumToExchange,
    accountFrom,
    accountTo
  }
}

const mapDispatchToProps = (dispatch) => ({
  applyExchange: (sum) => {
    dispatch(setSumToExchange(sum))
  }
})

const ApplyExchangeButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeButton)

export default ApplyExchangeButton