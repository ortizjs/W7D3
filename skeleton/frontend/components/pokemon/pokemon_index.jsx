import React from 'react';


class PokemonIndex extends React.Component {
  
  componentDidMount() {
    this.props.requestAllPokemon();
  }
  
  render() {
    let allPokemons = this.props.pokemon.map(pokemon => {
      return (
        <li key={pokemon.id}>{pokemon.name} <img src={pokemon.image_url} /></li>
      );
    });
    
    return(
      <ul>{allPokemons}</ul>
    );
  }
}
export default PokemonIndex;