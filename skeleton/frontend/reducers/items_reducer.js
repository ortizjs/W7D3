import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return Object.merge({}, state, action.entities.items);
    default:
      return state;
  }
};

export default itemsReducer;