import React, { Component } from 'react';

class PokeCard extends Component {
    constructor(props){
      super(props);
      this.state = {
          isPokemonPageShow : false
        }
        this.handleSubmit = this.handleSubmit.bind(this); 
      }
      handleSubmit() {
          this.props.handlePokemonSelect();
      }
      render(){
      return(
            <div className="card bg-light"  
              onClick={this.handleSubmit}
              style={{marginLeft: '3em', marginTop: '1em', width:'200px', height:'200px'}}>
                   <img src={this.props.pokemonItem.img} />
                   <name>{this.props.pokemonItem.name}</name>
              </div>

      )
    }
    }
    
export default PokeCard;