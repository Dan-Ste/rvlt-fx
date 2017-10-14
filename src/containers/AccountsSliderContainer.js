import { connect } from 'react-redux'
import AccountsSlider from '../components/AccountsSlider'
import { setAccountIdFrom, setAccountIdTo } from '../actions/accounts'
import { setSumTo } from '../actions/exchange'
import { bindActionCreators } from 'redux'
import { resetErrorMessage } from '../actions/errorMessage'

const mapStateToProps = ({ accounts, accountIdTo, accountIdFrom, rates, sumTo, sumFrom, errorMessage }, { isExchangeFrom }) => {
  const accountFrom = accounts[accountIdFrom]
  const accountTo = accounts[accountIdTo]

  return {
    accounts,
    accountFrom,
    accountTo,
    rates,
    sumTo,
    sumFrom,
    errorMessage,
    isExchangeFrom
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setAccountIdFrom,
    setAccountIdTo,
    setSumTo,
    resetErrorMessage
  }, dispatch)
}

const AccountsSliderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsSlider)

export default AccountsSliderContainer