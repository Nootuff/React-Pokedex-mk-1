import React from "react"
import PokemonCard from "./Pokemon-card"
import '../stylesheets/Pokedex.css';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="Pokedex">
                <p>Total cp: {this.props.cp}</p>
                <p>{this.props.isWinner ? "Winner" : "Loser"}</p>
                <div className="Pokedex-cards"> {/*This is generally how to do your class names in react, this format of class name. */}
                {this.props.pokemon.map((p) => ( /* Loop over the array of objects in pokemon which is being passed in as a prop. */
<PokemonCard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/> //Render a pokemon card object. 
                ))}
                 </div>
            </div>
        )
    }
}

export default Pokedex; 