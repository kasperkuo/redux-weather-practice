import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      var a = [ action.payload.data, ...state ];
      return a;
      break;
  }
  return state;
}
