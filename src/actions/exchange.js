import {
  SET_MONEY_FROM,
  RESET_MONEY_FROM,
  SET_MONEY_TO,
  RESET_MONEY_TO
}
from './actionTypes'

export const setMoneyFrom = money => {
  return {
    type: SET_MONEY_FROM,
    money
  }
}

export const resetMoneyFrom = money => {
  return {
    type: RESET_MONEY_FROM,
    money
  }
}

export const setMoneyTo = money => {
  return {
    type: SET_MONEY_TO,
    money
  }
}

export const resetMoneyTo = money => {
  return {
    type: RESET_MONEY_TO
  }
}