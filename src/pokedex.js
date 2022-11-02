import React from 'react';
import Card from './card';
import './pokedex.css';

const Pokedex = ({ exp, isWinner, pokemon }) => {
    const win = isWinner ? <p className="winner">Winner!</p> : null;

    return (
        <div className="Pokedex">
            <h2 className="Pokedex-title">Pokedex</h2>
            <div className="Pokedex-cards">
                {pokemon.map(p => (
                    <Card id={p.id} name={p.name} type={p.type} exp={p.baseEXP} />
                ))}
            </div>
        </div>
    )
}

export default Pokedex;