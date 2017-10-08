import { combineReducers } from 'redux';
import accounts from './accounts';
import rates from './rates';

const exchangesState = {
  exchangeFrom: 'USD',
  exchangeTo: 'EUR'
}

const exchanges = function(state = exchangesState, action) {
  switch (action.type) {
    default: return state;
  }
}

const rootReducer = combineReducers({
  accounts,
  rates,
  exchanges
});

export default rootReducer;