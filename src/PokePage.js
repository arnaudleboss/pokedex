import React, { Component } from 'react';

class PokePage extends Component {
    constructor(props){
      super(props);
      this.state = {
        } 
      }
      
      render(){
      return(
              <div className="card bg-light" 
              style={{marginLeft: '3em', marginTop: '1em', width:'200px', height:'200px'}}>
                   <img src={this.props.pokemonItem.img} />
                    {this.props.pokemonItem.name}
              </div>
              
         
      )
    }
    }
export default PokePage;