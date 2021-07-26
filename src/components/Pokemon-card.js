import React from "react"
import '../stylesheets/Pokemon-card.css';

const pokeAPI = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class PokemonCard extends React.Component {
    render() {
       let imgSrc = `${pokeAPI}${this.props.id}.png`; //Template literals, let you put the value of your pokeAPI const into this let's string, the url is from the pokemon API, after the last / it needs needs the pokemon id number which you get from the passed in props from pokedex and then ".png" on the end. 

        return (
            <div className="PokemonCard">
                <h3 className="PokemonCard-title">{this.props.name}</h3>
                <img src ={imgSrc} alt=  {"Image of " + this.props.name} />
                <div className="PokemonCard-data">Type: {this.props.type}</div>
                <div className="PokemonCard-data">CP: {this.props.base_experience}</div>
            </div>
        )
    }
}

export default PokemonCard;