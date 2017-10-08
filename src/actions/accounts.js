export const setAccountIdFrom = id => ({
  type: 'SET_ACCOUNT_ID_FROM',
  id
})

export const setAccountIdTo = id => ({
  type: 'SET_ACCOUNT_ID_TO',
  id
})

export const updateAccountAmount = (id, newAmount) => ({
  type: 'UPDATE_ACCOUNT_AMOUNT',
  id,
  newAmount
})