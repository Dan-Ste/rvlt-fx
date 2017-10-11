import { combineReducers } from 'redux';
import { accounts, accountIdFrom, accountIdTo } from './accounts';
import rates from './rates';
import { sumFrom, sumTo } from './exchange';
import errorMessage from './errorMessage';

const rootReducer = combineReducers({
  accounts,
  accountIdFrom,
  accountIdTo,
  rates,
  sumFrom,
  sumTo,
  errorMessage
});

export default rootReducer;