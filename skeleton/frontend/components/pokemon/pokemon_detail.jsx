import React from 'react';


class PokemonDetail extends React.Component {
  
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }
  
  // componentDidUpdate(prevProps) {
  //   if (this.props === prevProps) {
  //     this.props.requestSinglePokemon(this.props.match.params.pokemonId)
  //   }
  // }
  
  render() {
    debugger
    if (!this.props.pokemon){
      return (<h1>Loading...</h1>);
    }
    return (
      <div>
        <h1>{this.props.pokemon.name}</h1>
        <h1><img src={this.props.pokemon.image_url} /></h1>
        <ul>
          {Object.values(this.props.items).map(item => {
            return <li>{item.name}<img src={item.image_url}/></li>;
          })}
        </ul>
      </div>
    );
  }
  
  
}

export default PokemonDetail;