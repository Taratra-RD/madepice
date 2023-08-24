import React from 'react'
import './css/Cardprolittl.css'
export default function CardproLittl({ product }) {
    return (
        <div className="card--pro--l">
            <div className="card-title">
                <h3 style={{ fontSize: '15px', textTransform: 'uppercase', display: 'flex', justifyContent: 'center' }}>{product.name}</h3>
            </div>
        </div>
    )
}
