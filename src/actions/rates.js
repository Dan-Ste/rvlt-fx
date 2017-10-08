import * as types from './actionTypes';

const URL = 'https://openexchangerates.org/api/latest.json?app_id=a2d5ba89cb044a51aa358f6aa98e2f5c&symbols=EUR%2CGBP';
const POLL_INTERVAL = 10000;

export default function receiveRates(json) {
  const { EUR, GBP } = json.rates
  const rates = {
    USD: {
      EUR: EUR,
      GBP: GBP
    },
    EUR: {
      USD: 1 / EUR,
      GBP: GBP / EUR
    },
    GBP: {
      USD: 1 / GBP,
      EUR: EUR / GBP
    }
  }

  console.log(rates)
  return {
    type: types.RECEIVE_RATES,
    rates
  };
}

export function fetchRates() {
  return dispatch => {
    return new Promise(resolve => {
      (function makeRequest() {
        fetch(URL, {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Accept': 'application/json'
            }
          })
          .then(response => response.json())
          .then(json => {
            dispatch(receiveRates(json))
            resolve(true)
          })
          
        setInterval(makeRequest, POLL_INTERVAL)
      })()
    })
  }
}