import initialState from '../store/initialState';

export const accounts = function(state = initialState.accounts, action) {
  switch (action.type) {
    case 'UPDATE_ACCOUNT_AMOUNT':
      return state.map(account =>
        Number(account.id) === action.id ?
        { ...account, amount: account.amount - action.newAmount } :
        account
      )
    default:
      return state
  }
}

export const accountIdFrom = function(state = initialState.accountIdFrom, action) {
  switch (action.type) {
    case 'SET_ACCOUNT_ID_FROM':
      return action.id
    default:
      return state
  }
}

export const accountIdTo = function(state = initialState.accountIdTo, action) {
  switch (action.type) {
    case 'SET_ACCOUNT_ID_TO':
      return action.id
    default:
      return state
  }
}