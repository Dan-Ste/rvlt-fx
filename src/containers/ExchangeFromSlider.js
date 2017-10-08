import { connect } from 'react-redux'
import AccountsSlider from '../components/AccountsSlider'
import { setAccountIdFrom } from '../actions/accounts'

const mapStateToProps = ({ accounts, accountIdTo, accountIdFrom, rates }) => {
  return {
    accounts,
    accountIdTo,
    accountIdFrom,
    rates,
    isExchangeFrom: true
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSlideChange: idx => {
    dispatch(setAccountIdFrom(idx))
  }
})

const ExchangeFromSlider = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsSlider)

export default ExchangeFromSlider