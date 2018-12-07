
export const selectAllPokemon = (state) => {
  let result = Object.values(state.entities.pokemon).map(pokemon => {
    return pokemon;
  });
  
  return result;
};

export const selectSinglePokemon = (state, id) => {
  return state.entities.pokemon.id;
};

// window.selectAllPokemon = selectAllPokemon;