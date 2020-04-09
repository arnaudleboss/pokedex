import React, { Component } from 'react';

import PokeCard from "./PokeCard";
import  PokemonT from "./PokemonT";


class Pokelist extends Component {
    constructor(props){
      super(props);
      this.state = {
            listPokemon: PokemonT,
            isPokemonPageShow : false
        } 
        this.handlePokemonSelect = this.handlePokemonSelect.bind(this);
      }
      
    handlePokemonSelect(){
        this.setState({
            isPokemonPageShow : !this.state.isPokemonPageShow
        })
    }
      render(){
      return(
       < DisplayPage handlePokemonSelect={this.handlePokemonSelect} isPokemonPageShow={this.state.isPokemonPageShow} />
      )
    }
    }
    function DisplayPage(props){
        if(props.isPokemonPageShow){
            return(
            <div className="card bg-light" 
                
            style={{marginLeft: '25em', marginTop: '-10em', width:'500px', height:'400px'}}>
              je sais pas trop la 
              <a href="pokedex" class="btn btn-danger">Retour</a>
            </div>
           
           ); 
            
        }
        else {
            return (

                <section              
        className="poke-list">
            <div className="row">


            {PokemonT.map(pokemon => (
               <PokeCard handlePokemonSelect={props.handlePokemonSelect.bind(this)} pokemonItem={pokemon} key = {pokemon.id}/>
            ))} 
        </div></section>
      
            )
           
        } 
    }
   
    export default Pokelist;