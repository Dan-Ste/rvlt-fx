import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setSumFrom, setSumTo } from '../actions/exchange'
import MoneyFromInput from '../components/MoneyFromInput'

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
    setSumTo
  }, dispatch)
}

const MoneyFromInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoneyFromInput)

export default MoneyFromInputContainer