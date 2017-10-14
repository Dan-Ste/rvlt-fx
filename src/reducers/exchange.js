import {
  SET_MONEY_FROM,
  RESET_MONEY_FROM,
  SET_MONEY_TO,
  RESET_MONEY_TO
}
from '../actions/actionTypes'

export const moneyFrom = function(state = null, action) {
  switch (action.type) {
    case SET_MONEY_FROM:
      return action.money
    case RESET_MONEY_FROM:
      return null;
    default:
      return state
  }
}

export const moneyTo = function(state = null, action) {
  switch (action.type) {
    case SET_MONEY_TO:
      return action.money
    case RESET_MONEY_TO:
      return null;
    default:
      return state
  }
}