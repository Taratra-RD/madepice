import React, { useState } from 'react'
import './css/CardPro.css'
import { Link } from 'react-router-dom'
import SingleProduct from '../pages/SingleProduct'

export default function CardPro({ product }) {
    const [cardFace, setCardFace] = useState(true)

    const back = (
        <div className="card--pro--hover">
            <div className="card--image">

            </div>
            <div className="card--body">
                <div className="card-title">
                    <h3>{product.name}</h3>
                </div>
                <div className='card--description'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores qui perferendis corporis blanditiis eaque sint
                    </p>
                </div>
                <Link to={`/product/${product.name}`} className="btn" style={{ background: '#f2e5d1', borderRadius: '8px' }}>
                    En savoir plus
                </Link>
                <SingleProduct product={product.name}/>
            </div>

        </div>
    )
    const front = (
        <div className="card--pro">
            <div className="card-title">
                <h3 style={{ color: 'white', fontFamily: 'Canela Deck Trial', fontSize: "16px", textAlign: "center", textTransform: "uppercase" }}>{product.name}</h3>
            </div>
        </div>
    )

    const handleFace = (e) => {
        setCardFace(prev => (!prev))
    }
    return (
        <div onMouseEnter={handleFace} onMouseLeave={handleFace}>
            {cardFace ? front : back}
        </div>
    )
}
