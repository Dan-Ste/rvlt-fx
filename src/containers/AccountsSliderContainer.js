import { connect } from 'react-redux'
import AccountsSlider from '../components/AccountsSlider'
import { setAccountIdFrom, setAccountIdTo } from '../actions/accounts'
import { setMoneyTo } from '../actions/exchange'
import { bindActionCreators } from 'redux'
import { resetErrorMessage } from '../actions/errorMessage'

const mapStateToProps = ({ accounts, accountIdFrom, accountIdTo, rates, moneyFrom }, { isExchangeFrom }) => {
  const accountFrom = accounts.find(account => account.id === accountIdFrom)
  const accountTo = accounts.find(account => account.id === accountIdTo)

  const rateFromTo = rates[accountFrom.currencyISO][accountTo.currencyISO]

  return {
    accounts,
    accountFrom,
    accountTo,
    rateFromTo,
    moneyFrom,
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