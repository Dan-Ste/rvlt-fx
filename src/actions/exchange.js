import {
  SET_SUM_FROM,
  RESET_SUM_FROM,
  SET_SUM_TO,
  RESET_SUM_TO
}
from './actionTypes'

export const setSumFrom = sum => {
  return {
    type: SET_SUM_FROM,
    sum
  }
}

export const resetSumFrom = sum => {
  return {
    type: RESET_SUM_FROM,
    sum
  }
}

export const setSumTo = sum => {
  return {
    type: SET_SUM_TO,
    sum
  }
}

export const resetSumTo = sum => {
  return {
    type: RESET_SUM_TO
  }
}