import { connect } from 'react-redux'
import { subtractSumFromAccountAmount, addSumToAccountAmount } from '../actions/accounts'
import { resetSumFrom, resetSumTo } from '../actions/exchange'
import ApplyExchangeButton from '../components/ApplyExchangeButton'

const mapStateToProps = ({ sumFrom, sumTo, accountIdFrom, accountIdTo }) => {
  return {
    sumFrom,
    sumTo,
    accountIdFrom,
    accountIdTo
  }
}

const mapDispatchToProps = (dispatch) => ({
  subtractSum: (accountId, amount) => {
    dispatch(subtractSumFromAccountAmount(accountId, amount))
  },
  addSum: (accountId, amount) => {
    dispatch(addSumToAccountAmount(accountId, amount))
  },
  resetExchangeSums: () => {
    dispatch(resetSumFrom())
    dispatch(resetSumTo())
  }
})

const ApplyExchangeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplyExchangeButton)

export default ApplyExchangeContainer