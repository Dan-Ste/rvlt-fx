import { RECEIVE_RATES } from '../actions/actionTypes';

export default function rates(state = {}, action) {
  switch (action.type) {
    case RECEIVE_RATES:
      return action.rates
    default:
      return state
  }
}