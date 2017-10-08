import { combineReducers } from 'redux';
import { accounts, accountIdFrom, accountIdTo } from './accounts';
import rates from './rates';

const sumFrom = function(state = null, action) {
  switch (action.type) {
    case 'SET_SUM_FROM':
      return action.sum
    default:
      return state
  }
}

const sumTo = function(state = null, action) {
  switch (action.type) {
    case 'SET_SUM_TO':
      return action.sum
    default:
      return state
  }
}

const rootReducer = combineReducers({
  accounts,
  accountIdFrom,
  accountIdTo,
  rates,
  sumFrom,
  sumTo
});

export default rootReducer;