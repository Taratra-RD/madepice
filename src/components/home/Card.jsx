import React from "react";
import { Link, useNavigate,useParams } from "react-router-dom";
import { data } from "../../data";
import '../css/Card.css';

const Card = ({ id,img, title, text,className }) => {
    const cardStyle = {
        backgroundImage: `url(${img})`, // Set the background image URL dynamically
    };


    return (
        <div className={`card ${className}` } style={cardStyle}>
            <div className="card-title">
                <h3 style={{ color: 'aliceblue', fontFamily: 'Canela Deck Trial',filter:'' }}>{title}</h3>
            </div>
            <div className="card-info">
                <div className="img-top-card" style={{backgroundImage:`url(${''})`}}></div>
                <div className="text-bottom-card">
                    <h3 style={{ color: 'white', fontFamily: 'Canela Deck Trial' }}>{title}</h3>
                    <p style={{ color: 'white', paddingTop: '5px', paddingBottom: '5px', fontFamily:'Raleway' }}>
                        {text}
                    </p>
                    <Link to={'/product/'+id}>
                        <button className="btn savoir-plus" style={{ background: '#f2e5d1', borderRadius: '8px',fontFamily:'Raleway',fontWeight:700  }}>
                            En savoir plus
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
