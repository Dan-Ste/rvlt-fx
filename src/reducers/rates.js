import { RECEIVE_RATES } from '../actions/actionTypes';

export default function rates(state = {}, action) {
  switch (action.type) {
    case RECEIVE_RATES:
      console.log(action.rates)
    default:
      return state;
  }
}