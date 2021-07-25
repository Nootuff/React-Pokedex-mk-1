import React from "react"
import '../stylesheets/Pokemon-card.css';

const pokeAPI = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class PokemonCard extends React.Component {
    render() {
       let imgSrc = `${pokeAPI}${this.props.id}.png`;

        return (
            <div className="PokemonCard">
                <h3>{this.props.name}</h3>
                <img src ={imgSrc} alt=  {"Image of " + this.props.name} />
                <div>Type: {this.props.type}</div>
                <div>CP: {this.props.base_experience}</div>
            </div>
        )
    }
}

export default PokemonCard;