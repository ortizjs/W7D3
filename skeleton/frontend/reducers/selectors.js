
export const selectAllPokemon = (state) => {
  let result = Object.values(state.entities.pokemon).map(pokemon => {
    return pokemon;
  });
  
  return result;
};

// export const selectSinglePokemon = (state) => {
//   let result = Object.values(state.entities.pokemon).map(pokemon => {
//     return pokemon;
//   });
// 
//   return result;
// };

// window.selectAllPokemon = selectAllPokemon;