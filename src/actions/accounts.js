import {
  SET_ACCOUNT_ID_FROM,
  SET_ACCOUNT_ID_TO,
  SUBTRACT_SUM_FROM_ACCOUNT_AMOUNT,
  ADD_SUM_TO_ACCOUNT_AMOUNT
} from './actionTypes'

export const setAccountIdFrom = id => ({
  type: SET_ACCOUNT_ID_FROM,
  id
})

export const setAccountIdTo = id => ({
  type: SET_ACCOUNT_ID_TO,
  id
})

export const subtractSumFromAccountAmount = (id, sum) => ({
  type: SUBTRACT_SUM_FROM_ACCOUNT_AMOUNT,
  id,
  sum
})

export const addSumToAccountAmount = (id, sum) => ({
  type: ADD_SUM_TO_ACCOUNT_AMOUNT,
  id,
  sum
})