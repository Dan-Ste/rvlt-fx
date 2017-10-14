import initialState from '../store/initialState';
import {
  SET_ACCOUNT_ID_FROM,
  SET_ACCOUNT_ID_TO,
  SUBTRACT_MONEY_FROM_ACCOUNT_AMOUNT,
  ADD_MONEY_TO_ACCOUNT_AMOUNT
} from '../actions/actionTypes'

export const accounts = function(state = initialState.accounts, action) {
  switch (action.type) {
    case SUBTRACT_MONEY_FROM_ACCOUNT_AMOUNT:
      return state.map(account =>
        account.id === action.id ? { ...account, amount: account.amount - action.sum } : account
      )
    case ADD_MONEY_TO_ACCOUNT_AMOUNT:
      return state.map(account =>
        account.id === action.id ? { ...account, amount: account.amount + action.sum } : account
      )
    default:
      return state
  }
}

export const accountIdFrom = function(state = initialState.accountIdFrom, action) {
  switch (action.type) {
    case SET_ACCOUNT_ID_FROM:
      return action.id
    default:
      return state
  }
}

export const accountIdTo = function(state = initialState.accountIdTo, action) {
  switch (action.type) {
    case SET_ACCOUNT_ID_TO:
      return action.id
    default:
      return state
  }
}