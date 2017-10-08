import { combineReducers } from 'redux';
import { accounts, accountIdFrom, accountIdTo } from './accounts';
import rates from './rates';

const rootReducer = combineReducers({
  accounts,
  accountIdFrom,
  accountIdTo,
  rates
});

export default rootReducer;