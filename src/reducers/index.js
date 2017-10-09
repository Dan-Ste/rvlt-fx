import { combineReducers } from 'redux';
import { accounts, accountIdFrom, accountIdTo } from './accounts';
import rates from './rates';
import { sumFrom, sumTo } from './exchange';

const rootReducer = combineReducers({
  accounts,
  accountIdFrom,
  accountIdTo,
  rates,
  sumFrom,
  sumTo
});

export default rootReducer;