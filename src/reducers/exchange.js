import {
  SET_SUM_FROM,
  RESET_SUM_FROM,
  SET_SUM_TO,
  RESET_SUM_TO
}
from '../actions/actionTypes'

export const sumFrom = function(state = null, action) {
  switch (action.type) {
    case SET_SUM_FROM:
      return action.sum
    case RESET_SUM_FROM:
      return null;
    default:
      return state
  }
}

export const sumTo = function(state = null, action) {
  switch (action.type) {
    case SET_SUM_TO:
      return action.sum
    case RESET_SUM_TO:
      return null;
    default:
      return state
  }
}