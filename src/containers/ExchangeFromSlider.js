import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import AccountsSlider from '../components/AccountsSlider'

const mapStateToProps = (state) => ({
  accounts: state.accounts
})

const ExchangeFromSlider = connect(
  mapStateToProps
)(AccountsSlider)

export default ExchangeFromSlider