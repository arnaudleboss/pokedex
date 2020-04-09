import React, { Component } from 'react';
import poke from './test.png'; 
import logo from './Pokédex_Pt.png';
import './App.css';
import {PokemonT} from "./PokemonT"
import { render } from '@testing-library/react';

import PokeList from "./Pokelist";

function App() {

  return (
    <div className="App">
      
      <div className="App-header">
        <img src={poke} className="App-poke" alt="logo" />
        <p>
         <b>Pokedex </b> 
        </p>
        <img src={poke} className="App-poke2" alt="logo" />
      </div>
     <div className="App-Body">
     <img src={logo} className="App-logo" alt="logo" />
        <PokeList />
     </div>     
    </div>
  );
}




export default App;

