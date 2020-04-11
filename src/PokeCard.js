import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class PokeCard extends Component {
    constructor(props){
      super(props);
      this.state = {
          isPokemonPageShow : false
        }
        this.handleSubmit = this.handleSubmit.bind(this); 
      }
      handleSubmit() {
          this.props.handlePokemonSelect(this.props.pokemonItem);
      }
      render(){
      return(
           
          <div className="card bg-light"  
              onClick={this.handleSubmit}
              
              style={{marginLeft: '3em', marginTop: '1em', width:'200px', height:'200px'}}>
                   <img  height="190" width="190" src={this.props.pokemonItem.img} />
             
                  <button class="btn btn-warning"> <Link to={"/pokemon/"+this.props.pokemonItem.name}>Consulter</Link></button>
              </div>

      )
    }
    }
    
export default PokeCard;