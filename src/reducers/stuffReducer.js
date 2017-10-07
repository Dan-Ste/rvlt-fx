import {FETCH_STUFF, RECEIVE_STUFF} from '../actions/actionTypes';

export default function stuffs(state = ['sdfsfd', 'sdfsdf'], action) {;
  switch (action.type) {
    case FETCH_STUFF:
    case RECEIVE_STUFF:
      return Object.assign({}, state, {
        stuffs: action.stuffs
      })
    default:
      return state;
  }
}