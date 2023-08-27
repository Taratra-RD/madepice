import React from 'react'
import './css/CardproLittl.css'
export default function CardproLittl({ product }) {
    return (
        <div className="card--pro--l">
            <div className="card-title">
                <h3 style={{ color: 'white', fontFamily: 'Canela Deck Trial' }}>{product.name}</h3>
            </div>
            <div className="card-info">
                <h3 style={{ color: 'white', fontFamily: 'Canela Deck Trial' }}>Card</h3>
                <p style={{ color: 'white', paddingTop: '15px', paddingBottom: '15px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum exercitationem enim vero eos delectus inventore ratione ab numquam perferendis nam.
                </p>
                <button className="btn" style={{ background: '#f2e5d1', borderRadius: '8px' }}>
                    En savoir plus
                </button>
            </div>
        </div>
    )
}
