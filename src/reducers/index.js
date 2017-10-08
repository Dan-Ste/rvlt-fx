import { combineReducers } from 'redux';
import { accounts, accountIdFrom, accountIdTo } from './accounts';
import rates from './rates';

const sumToExchange = function(state = null, action) {
  switch (action.type) {
    case 'SET_SUM_TO_EXCHANGE':
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
  sumToExchange
});

export default rootReducer;