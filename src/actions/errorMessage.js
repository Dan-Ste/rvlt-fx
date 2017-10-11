import { RESET_ERROR_MESSAGE, SET_NOT_ENOUGH_MONEY_ERROR } from './actionTypes'

export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
})

export const setNotEnoughMoneyError = error => ({
  type: SET_NOT_ENOUGH_MONEY_ERROR,
  error
})