import React, { useState } from 'react';
import CardPro from './CardPro'
import CardProLittl from './CardproLittl'
import './css/ProductList.css'

const ProductList = ({ products, groupProductsByType, displayProduct }) => {
    // const [selectedType, setSelectedType] = useState('')
    // const groupedProducts = groupProductsByType(products);
    const [selectedLetter, setSelectedLetter] = useState('');
    const groupedProducts = groupProductsByType(products);


    return (
        <div className='productList'>
            <div className="product--filter" style={{ zIndex: "50" }}>
                <h1>Filtrer</h1>
                <label style={{ fontSize: '18px', fontWeight: 'bold' }}>
                    <input
                        type="radio"
                        value=""
                        checked={selectedLetter === ''}
                        onChange={() => setSelectedLetter('')}
                    />
                    Tous
                </label>
                {Object.keys(groupedProducts).map(letter => (
                    <label key={letter} style={{ fontSize: '18px', fontWeight: 'bold' }}>
                        <input
                            type="radio"
                            value={letter}
                            checked={selectedLetter === letter}
                            onChange={() => setSelectedLetter(letter)}
                        />
                        {letter}
                    </label>
                ))}
            </div>
            <div className='product--list--right'>
                <h1>La liste de nos produits</h1>
                {selectedLetter === '' ? (
                    Object.keys(groupedProducts).map(letter => (
                        <div key={letter} className='product--list'>
                            <h2 style={{ fontStyle: 'italic', textTransform: 'capitalize' }}>{letter}</h2>
                            <div className="product--list--card">
                                <div className='sub-product' style={{ display: 'flex', width: '91%', flexWrap: 'wrap' }}>
                                    {groupedProducts[letter].map(product => (
                                        displayProduct ? (
                                            <div className="card--a">
                                                <CardPro product={product} />
                                            </div>
                                        ) : (
                                            <div className="card--a">
                                                <CardProLittl product={product} />
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    selectedLetter in groupedProducts && (
                        <div key={selectedLetter} className='product--list'>
                            <h2 style={{ fontStyle: 'italic', textTransform: 'capitalize' }}>{selectedLetter}</h2>
                            <div className="product--list--card">
                                <div className='sub-product' style={{ display: 'flex', width: '91%', flexWrap: 'wrap' }}>
                                    {groupedProducts[selectedLetter].map(product => (
                                        displayProduct ? (
                                            <div className="card--a">
                                                <CardPro product={product} />
                                            </div>
                                        ) : (
                                            <div className="card--a">
                                                <CardProLittl product={product} />
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default ProductList;
