import React, { Component } from 'react';
import poke from './test.png'; 
import logo from './Pokédex_Pt.png';
import './App.css';
import {PokemonT} from "./PokemonT"
import { render } from '@testing-library/react';



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
        <section className="poke-list">
          
        </section>  
     </div>     
    </div>
  );
}


class Pokelist extends Component {
  constructor(props){
    super(props);
    this.state = {
      cells: PokemonT.map(PokemonT => {
        return (  
          <div className="card bg-light" 
          key ={PokemonT.id} 
          img ={PokemonT.img}
          name={PokemonT.name}
          id={PokemonT.id} 
          style={{marginLeft: '3em', width:'200px', height:'200px'}}></div>
        );
      }),
      items : Array.from({ length: 2 }) 
      } 
    }
    render(){
    return(
      <section className="poke-list">
        {this.state.cells}
      </section>
    )
  }
  }

export default App;

