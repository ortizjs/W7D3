import React from 'react';

class PokemonDetail extends React.Component {
  
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }
  render() {
    // debugger
    if (!this.props.pokemon){
      return (<h1>Loading...</h1>)
    }
    return <h1>{this.props.pokemon.name}</h1>;
  }
  
  
}

export default PokemonDetail;