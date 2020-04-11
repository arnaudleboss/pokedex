import React, { Component } from 'react';

import PokeCard from "./PokeCard";
import  PokemonT from "./PokemonT";
import {BrowserRouter as Router ,Link ,Route,Switch} from 'react-router-dom'


class Pokelist extends Component {
    constructor(props){
      super(props);
      this.state = {
            listPokemon: PokemonT,
            isPokemonPageShow : false,
            pokemonSelect : {}
        } 
      }
      
    handlePokemonSelect(pokemonSelectData){
        this.props.handlePokemonSelect(pokemonSelectData)
    }
      render(){
      return(
        <section              
        className="poke-list">
            <div className="row">

        
            {PokemonT.map(pokemon => (
                
                    
                    
                        <PokeCard handlePokemonSelect={this.handlePokemonSelect.bind(this)} pokemonItem={pokemon} key = {pokemon.id}/>
                   
                    
            ))} 
           
           

        </div></section>
      
      )
    }
    }
 
   
    export default Pokelist;