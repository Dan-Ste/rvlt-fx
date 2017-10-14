import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setSumFrom, setSumTo } from '../actions/exchange'
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
    setSumFrom,
    setSumTo,
    resetErrorMessage
  }, dispatch)
}

const MoneyInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoneyInput)

export default MoneyInputContainer