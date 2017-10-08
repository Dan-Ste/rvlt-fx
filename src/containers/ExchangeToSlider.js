import { connect } from 'react-redux'
import AccountsSlider from '../components/AccountsSlider'
import { setAccountIdTo } from '../actions/accounts'

const mapStateToProps = ({ accounts, accountIdTo, accountIdFrom, rates, sumToExchange }) => ({
  accounts,
  accountIdTo,
  accountIdFrom,
  sumToExchange,
  rates
})

const mapDispatchToProps = (dispatch) => ({
  onSlideChange: idx => {
    dispatch(setAccountIdTo(idx))
  }
})

const ExchangeToSlider = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsSlider)

export default ExchangeToSlider