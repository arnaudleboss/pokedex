import React, { Component } from 'react';

import PokeCard from "./PokeCard";
import  PokemonT from "./PokemonT";
import {BrowserRouter as Router ,Link ,Route,Switch} from 'react-router-dom';
import PokeList from "./Pokelist";
import PokePage from './PokePage';

class Content extends Component {
    constructor(props){
      super(props);
      this.state = {
            pokemonSelect : {}
        } 
      }
      
    handlePokemonSelect(pokemonSelectData){
        this.setState({
            pokemonSelect : pokemonSelectData
        })
    }
      render(){
      return(
        <Router>
        <Switch>
                <Route path={"/pokemon/"+this.state.pokemonSelect.name}>
                    <PokePage pokemon = {this.state.pokemonSelect} />
                </Route>
                <Route path="/">
                  <PokeList handlePokemonSelect={this.handlePokemonSelect.bind(this)}/>
                </Route>
            </Switch>
            </Router>  
            )
           
        } 
    }
   
    export default Content;