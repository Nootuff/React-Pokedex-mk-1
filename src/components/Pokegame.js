import React from "react"
import Pokedex from "./Pokedex"
import data from "../data" //Import the array of objects from the data file. 

class Pokegame extends React.Component {
    static defaultProps = data; //A default prop, this becomes avaialbe when no actual props are passed? It's value is set to the data from the data.js file up above. 
    render() {
        let hand1 = []; //Empty array.
        let hand2 = [...this.props.pokemon]; // The spread operator, no matter what is in the this.props.pokemon, it will be added to this array. 

while(hand1.length < hand2.length){ //This while loop will keep running while the length of hand 2 is greater than the length of hand1, stopping when they both have an equal length. 

    let randomId = Math.floor(Math.random() * hand2.length); //Generates the random number based on current lenght of hand2. 
    let randPoke = hand2.splice(randomId, 1)[0]; //Takes a random card from  hand2, no idea what [0] is though. 

    hand1.push(randPoke); //The random card is pushed to hand1
}
let cp1 = hand1.reduce((cp, pokemon) => cp + pokemon.base_experience, 0);
let cp2 = hand2.reduce((cp, pokemon) => cp + pokemon.base_experience, 0);
        return (
            <div>
<Pokedex pokemon={hand1} cp={cp1} isWinner={cp1 > cp2} />
<Pokedex pokemon={hand2} cp={cp2} isWinner={cp2 > cp1} />
</div>
        )}}

export default Pokegame;