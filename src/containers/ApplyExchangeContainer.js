import { connect } from 'react-redux'
import { subtractMoneyFromAccount, addMoneyToAccount } from '../actions/accounts'
import { resetSumFrom, resetSumTo } from '../actions/exchange'
import { setNotEnoughMoneyError } from '../actions/errorMessage'
import ApplyExchangeButton from '../components/ApplyExchangeButton'

const mapStateToProps = ({ sumFrom, sumTo, accounts, accountIdFrom, accountIdTo }) => {
  const accountFrom = accounts[accountIdFrom]

  return {
    sumFrom,
    sumTo,
    accountFrom,
    accountIdTo
  }
}

const mapDispatchToProps = (dispatch) => ({
  subtractMoney: (accountId, amount) => {
    dispatch(subtractMoneyFromAccount(accountId, amount))
  },
  addSum: (accountId, amount) => {
    dispatch(addMoneyToAccount(accountId, amount))
  },
  resetExchangeSums: () => {
    dispatch(resetSumFrom())
    dispatch(resetSumTo())
  },
  onError: (error) => {
    dispatch(setNotEnoughMoneyError(error))
  }
})

const ApplyExchangeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplyExchangeButton)

export default ApplyExchangeContainer