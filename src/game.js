import React from 'react';
import Pokedex from './Pokedex';

const defaultPokemon = [
    { id: 4, name: "Charmander", type: "fire", baseEXP: 62 },
    { id: 7, name: "Squirtle", type: "water", baseEXP: 63 },
    { id: 11, name: "Metapod", type: "bug", baseEXP: 72 },
    { id: 12, name: "Butterfree", type: "flying", baseEXP: 178 },
    { id: 25, name: "Pikachu", type: "electric", baseEXP: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", baseEXP: 95 },
    { id: 94, name: "Gengar", type: "poison", baseEXP: 225 },
    { id: 133, name: "Eevee", type: "normal", baseEXP: 65 }
];

//sum total exp in current deck
const exp = (deck) => {
    return deck.reduce((exp, pokemon) => exp + pokemon.baseEXP, 0);
}

//shows two decks
const Game = ({ pokemon=defaultPokemon }) => {
    const first = [];
    const second = [...pokemon];

    while(first.length < second.length){
        const rIdx = Math.floor(Math.random() * second.length);
        const rPk = second.splice(rIdx, 1)[0];
        first.push(rPk);
    }

    const firstEXP = exp(first);
    const secondEXP = exp(second);

    return (
        <div>
            <Pokedex pokemon={first} exp={firstEXP} isWinner={firstEXP > secondEXP} />
            <Pokedex pokemon={second} exp={secondEXP} isWinner={firstEXP < secondEXP} />
        </div>
    )
}

export default Game;