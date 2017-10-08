import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import AccountsSlider from '../components/AccountsSlider'
import { setAccountIdTo } from '../actions/accounts'

const mapStateToProps = ({ accounts, accountIdTo, accountIdFrom, rates }) => ({
  accounts,
  accountIdTo,
  accountIdFrom,
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