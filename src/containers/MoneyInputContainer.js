import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setMoneyFrom, setMoneyTo } from '../actions/exchange'
import { resetErrorMessage } from '../actions/errorMessage'
import MoneyInput from '../components/MoneyInput'

const mapStateToProps = ({ accounts, accountIdFrom, accountIdTo, rates }) => {
  const accountFrom = accounts[accountIdFrom]
  const accountTo = accounts[accountIdTo]
  const rateFromTo = rates[accountFrom.currencyISO][accountTo.currencyISO]

  return {
    rateFromTo
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setMoneyFrom,
    setMoneyTo,
    resetErrorMessage
  }, dispatch)
}

const MoneyInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoneyInput)

export default MoneyInputContainer