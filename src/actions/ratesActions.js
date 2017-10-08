import * as types from './actionTypes';

const url = 'https://openexchangerates.org/api/latest.json?app_id=a2d5ba89cb044a51aa358f6aa98e2f5c&symbols=EUR%2CGBP';

export default function receiveRates(json) {
  return {
    type: types.RECEIVE_RATES,
    rates: json.rates
  };
}

export function fetchRates() {
  return dispatch => {
    return fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch(receiveRates(json))
      });
  };
}