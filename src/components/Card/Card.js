import React from 'react';
import './Card.css';

const Card = ({ imageSrc, title }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt={title} />
            <div className="overlay">
                <button className="download-button">Fazer download da receita</button>
            </div>
            <h3>Receita X</h3>
        </div>
    );
}

export default Card;