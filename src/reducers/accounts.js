import initialState from '../store/initialState';

export const accounts = function(state = initialState.accounts, action) {
  switch (action.type) {
    default: return state;
  }
}

export const accountIdFrom = function(state = 0, action) {
  switch (action.type) {
    case 'SET_ACCOUNT_ID_FROM':
      return action.id
    default:
      return state;
  }
}

export const accountIdTo = function(state = 1, action) {
  switch (action.type) {
    case 'SET_ACCOUNT_ID_TO':
      return action.id
    default:
      return state;
  }
}