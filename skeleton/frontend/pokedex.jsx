import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon, requestAllPokemon } from "./actions/pokemon_actions";
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root'); //hook
  const store = configureStore();
  // window.getState = store.getState; 
  // window.dispatch = store.dispatch;
  ReactDOM.render(
    <Root store = {store}/>, rootEl);
});


// window.fetchAllPokemon = fetchAllPokemon;
// window.requestAllPokemon = requestAllPokemon;
// window.receiveAllPokemon = receiveAllPokemon;
// window.selectAllPokemon = selectAllPokemon;