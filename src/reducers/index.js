import { combineReducers } from 'redux';
import { accounts, accountIdFrom, accountIdTo } from './accounts';
import rates from './rates';
import { moneyFrom, moneyTo } from './exchange';
import errorMessage from './errorMessage';

const rootReducer = combineReducers({
  accounts,
  accountIdFrom,
  accountIdTo,
  rates,
  moneyFrom,
  moneyTo,
  errorMessage
});

export default rootReducer;