import { connect } from 'react-redux'
import AccountsSlider from '../components/AccountsSlider'
import { setAccountIdFrom, setAccountIdTo } from '../actions/accounts'

const mapStateToProps = ({ accounts, accountIdTo, accountIdFrom, rates }, {isExchangeFrom}) => {
  const accountFrom = accounts[accountIdFrom]
  const accountTo = accounts[accountIdTo]

  return {
    accounts,
    accountFrom,
    accountTo,
    rates,
    isExchangeFrom
  }
}

const mapDispatchToProps = dispatch => ({
  setAccountIdFrom: id => {
    dispatch(setAccountIdFrom(id))
  },
  setAccountIdTo: id => {
    dispatch(setAccountIdTo(id))
  }
})

const AccountsSliderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsSlider)

export default AccountsSliderContainer