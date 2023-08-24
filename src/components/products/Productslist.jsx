import React from 'react'
import './css/Productslist.css'
import Cardproduct from './Cardproduct'

export default function Productslist({ selectedLetter, groupedProducts }) {
    return (
        <div className='--products--list--card'>
            <h2 style={{ fontStyle: 'italic', textTransform: 'capitalize', margin: '1rem' }}>{selectedLetter}</h2>
            <div className='products--list--card'>
                {groupedProducts.map(product => (
                    <div key={product.name} className='--card'>
                        <Cardproduct product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}
