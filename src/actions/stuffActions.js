import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

export default function receiveStuff() {
  return {
    type: types.RECEIVE_STUFF,
    stuffs: ['sdfsdf', 'sdfsdf']
  };
}

// export function fetchStuff() {
//   return dispatch => {
//     return fetch(url(), {
//         method: 'GET',
//         mode: 'cors',
//         credentials: 'include',
//         headers: {
//           'Accept': 'application/json'
//         }
//       })
//       .then(response => response.json())
//       .then(json => dispatch(receiveStuff(json)));
//   };
// }