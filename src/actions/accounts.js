import {
  SET_ACCOUNT_ID_FROM,
  SET_ACCOUNT_ID_TO,
  SUBTRACT_MONEY_FROM_ACCOUNT_AMOUNT,
  ADD_MONEY_TO_ACCOUNT_AMOUNT
} from './actionTypes'

export const setAccountIdFrom = id => ({
  type: SET_ACCOUNT_ID_FROM,
  id
})

export const setAccountIdTo = id => ({
  type: SET_ACCOUNT_ID_TO,
  id
})

export const subtractMoneyFromAccount = (id, money) => ({
  type: SUBTRACT_MONEY_FROM_ACCOUNT_AMOUNT,
  id,
  money
})

export const addMoneyToAccount = (id, money) => ({
  type: ADD_MONEY_TO_ACCOUNT_AMOUNT,
  id,
  money
})