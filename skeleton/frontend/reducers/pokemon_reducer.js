import {RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON} from "../actions/pokemon_actions";

const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_SINGLE_POKEMON:
      // return Object.assign({}, state, {[action.pokemon.pokemon.id]: action.pokemon.pokemon});
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;