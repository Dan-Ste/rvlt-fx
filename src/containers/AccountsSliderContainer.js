import { connect } from 'react-redux'
import AccountsSlider from '../components/AccountsSlider'
import { setAccountIdFrom, setAccountIdTo } from '../actions/accounts'
import { setMoneyTo } from '../actions/exchange'
import { bindActionCreators } from 'redux'
import { resetErrorMessage } from '../actions/errorMessage'

const mapStateToProps = ({ accounts, accountIdFrom, accountIdTo, rates, moneyTo, moneyFrom, errorMessage }, { isExchangeFrom }) => {
  const accountFrom = accounts.find(account => account.id === accountIdFrom)
  const accountTo = accounts.find(account => account.id === accountIdTo)

  const rateToFrom = rates[accountTo.currencyISO][accountFrom.currencyISO]
  const rateFromTo = rates[accountFrom.currencyISO][accountTo.currencyISO]

  return {
    accounts,
    accountFrom,
    accountTo,
    rateToFrom,
    rateFromTo,
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