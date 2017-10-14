import { connect } from 'react-redux'
import AccountSlide from '../components/AccountSlide'

const mapStateToProps = ({ accounts, accountIdFrom, accountIdTo, rates, moneyTo, moneyFrom, errorMessage }, { account, isExchangeFrom }) => {
  const accountFrom = accounts.find(account => account.id === accountIdFrom)
  const accountTo = accounts.find(account => account.id === accountIdTo)

  const rateFromTo = rates[accountFrom.currencyISO][accountTo.currencyISO]
  const rateToFrom = rates[accountTo.currencyISO][accountFrom.currencyISO]

  return {
    account,
    accountTo,
    accountFrom,
    rateFromTo,
    rateToFrom,
    moneyFrom,
    moneyTo,
    errorMessage,
    isExchangeFrom
  }
}

const AccountSlideContainer = connect(
  mapStateToProps
)(AccountSlide)

export default AccountSlideContainer