import { connect } from 'react-redux';
import { selectSinglePokemon } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';


const mapStateToProps = state => ({
  pokemon: selectSinglePokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestSinglePokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);