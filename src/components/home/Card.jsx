import React from "react";
import '../css/Card.css';

const Card = ({ img, title, text }) => {
    const cardStyle = {
        backgroundImage: `url(${img})`, // Set the background image URL dynamically
    };
    return (
        <div className="card shadow-lg" style={cardStyle}>
            <div className="card-title">
                <h3 style={{ color: 'white', fontFamily: 'Canela Deck Trial' }}>{title}</h3>
            </div>
            <div className="card-info">
                <h3 style={{ color: 'white', fontFamily: 'Canela Deck Trial' }}>{title}</h3>
                <p style={{ color: 'white', paddingTop: '5px', paddingBottom: '5px', fontFamily:'Raleway' }}>
                    {text}
                </p>
                <button className="btn" style={{ background: '#f2e5d1', borderRadius: '8px',fontFamily:'Raleway',fontWeight:700  }}>
                    En savoir plus
                </button>
            </div>
        </div>
    );
}

export default Card;
