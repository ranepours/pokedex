import React from 'react';
import './card.css';

const API = "https://raw.githubusercontent.com/" +
"PokeAPI/sprites/master/sprites/pokemon/";

const Card = ({ exp, id, name, type }) => {
    const imgSrc = `${API}${id}.png`;

    return (
        <div className="Card">
            <div className="Card-title">{name}</div>
            <img className="Card-image" src={imgSrc} alt={name} />
            <div className="Card-data">Type: {type}</div>
            <div className="Card-data">EXP: {exp}</div>
        </div>
    )
}

export default Card;