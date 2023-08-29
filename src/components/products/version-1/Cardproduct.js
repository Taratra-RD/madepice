import React from 'react'
import './css/Cardproduct.css'

export default function Cardproduct({ product }) {
    
    const handleCard = () => {
        let cardProduct = document.getElementById(`card--product--${product.name}`)
        let cardImage = document.getElementById(`card--image--${product.name}`)
        let cardBody = document.getElementById(`card--body--${product.name}`)
        let cardTitle = document.getElementById(`card--title--${product.name}`)

        if (cardProduct.className === `card--product`) {
            cardProduct.className += '--hover'
            cardImage.className += '--hover'
            cardTitle.className += '--hover'
            cardBody.className += '--hover'
        } else {
            cardProduct.className = 'card--product'
            cardImage.className = 'card--image'
            cardTitle.className = 'card--title'
            cardBody.className = 'card--body'
        }
    }

    const truncate = (text)=>{
        const words = text.split(' ');

        if (words.length > 20) {
            const truncatedWords = words.slice(0, 20);
            return truncatedWords.join(' ') + '...';
          }

          return text;
    }

    return (
        <div className='card--product' id={`card--product--${product.name}`} onMouseEnter={handleCard} onMouseLeave={handleCard}>
            <div className="card--image" id={`card--image--${product.name}`}>

            </div>
            <div className="card--title" id={`card--title--${product.name}`}>
                {product.name}
            </div>
            <div className="card--body" id={`card--body--${product.name}`}>
                <div className="card--title--body">
                    {product.name}
                </div>
                <div className="card--description">
                    {truncate(product.Description)}
                </div>
                <div className="card--button">
                    Savoir plus
                </div>
            </div>
        </div>
    )
}
