import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PokePage extends Component {
    constructor(props){
      super(props);
      this.state = {
        } 
      }
      
      render(){
      return(
        <div className="card bg-light" 
                
          style={{marginLeft: '25em', marginTop: '-10em', width:'600px', height:'1000px'}}>
            <button class="btn btn-warning"><Link to="/">retour</Link></button>
            <img height="190" width="190" src={this.props.pokemon.img} />
           <u> Numéro :</u>{this.props.pokemon.num} <br/>
           <u>Types :</u> {this.props.pokemon.type.map(typee => (
          <div>{typee}</div>  
          ))} 
           <u>Name : </u> {this.props.pokemon.name} <br/>         
           <u>Poid :</u> {this.props.pokemon.weight}<br/>
           <u>Bonbon : </u> {this.props.pokemon.candy}<br/>
           <u>Nombres de bonbons : </u> {this.props.pokemon.candy_count}<br/>
           <u>Type d'oeuf : </u> {this.props.pokemon.egg}<br/>
           <u>Chance d'apparition : </u> {this.props.pokemon.spawn_chance}<br/>
           <u>Apparition moyenne : </u> {this.props.pokemon.avg_spawns}<br/>
           <u>Temps d'apparition : </u> {this.props.pokemon.spawn_time}<br/>
           <u>Multiplicateur : </u>{this.props.pokemon.multipliers.map(mult => (
              <div>{mult}</div> 
          ))}
           <u>Faiblesses : </u> {this.props.pokemon.weaknesses.map(weak => (
          <div>{weak}</div>  
          ))}   
          <u>Prochaine évolution : </u> {this.props.pokemon.next_evolution.map(next => (
          <div>{next.num}  &nbsp;
          {next.name} </div>
          ))}        
        </div>
              
         
      )
    }
    }
export default PokePage;