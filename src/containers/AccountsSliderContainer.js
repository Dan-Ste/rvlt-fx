import { connect } from 'react-redux'
import AccountsSlider from '../components/AccountsSlider'
import { setAccountIdFrom, setAccountIdTo } from '../actions/accounts'
import { setMoneyTo } from '../actions/exchange'
import { bindActionCreators } from 'redux'
import { resetErrorMessage } from '../actions/errorMessage'

const mapStateToProps = ({ accounts, accountIdTo, accountIdFrom, rates, moneyTo, moneyFrom, errorMessage }, { isExchangeFrom }) => {
  const accountFrom = accounts[accountIdFrom]
  const accountTo = accounts[accountIdTo]

  return {
    accounts,
    accountFrom,
    accountTo,
    rates,
    moneyTo,
    moneyFrom,
    errorMessage,
    isExchangeFrom
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setAccountIdFrom,
    setAccountIdTo,
    setMoneyTo,
    resetErrorMessage
  }, dispatch)
}

const AccountsSliderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsSlider)

export default AccountsSliderContainer