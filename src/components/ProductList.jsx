import React, { useState } from 'react';
import CardPro from './CardPro'
import CardProLittl from './Cardprolittl'
import './css/ProductList.css'

const ProductList = ({ products, groupProductsByType, displayProduct }) => {
    const [selectedType, setSelectedType] = useState('');
    const groupedProducts = groupProductsByType(products);

    const filteredProducts = selectedType ? groupedProducts[selectedType] : products;

    return (
        <div className='productList'>
            <div className="product--filter">
                <h1>Filtrer</h1>
                <label style={{ fontSize: '18px', fontWeight: 'bold' }}>
                    <input
                        type="radio"
                        value=""
                        checked={selectedType === ''}
                        onChange={() => setSelectedType('')}
                    />
                    Tous
                </label>
                {Object.keys(groupedProducts).map(type => (
                    <label key={type} style={{ fontSize: '18px', fontWeight: 'bold' }}>
                        <input
                            type="radio"
                            value={type}
                            checked={selectedType === type}
                            onChange={() => setSelectedType(type)}
                        />
                        {type}
                    </label>
                ))}
            </div>
            <div className='product--list--right'>
                <h1>La liste de nos produits</h1>
                {selectedType === '' ? (
                    Object.keys(groupedProducts).map(type => (
                        <div key={type} className='product--list'>
                            <h2 style={{ fontStyle: 'italic', textTransform: 'capitalize' }}>{type}</h2>
                            <div className="product--list--card">
                                <div className='sub-product' style={{ display: 'flex', width: '91%', flexWrap: 'wrap' }}>
                                    {groupedProducts[type].map(product => (
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
                    Object.keys(groupedProducts).map(type => (
                        selectedType === type && (
                            <div key={type} className='product--list'>
                                <h2 style={{ fontStyle: 'italic', textTransform: 'capitalize' }}>{type}</h2>
                                <div className="product--list--card">
                                    <div className='sub-product' style={{ display: 'flex', width: '91%', flexWrap: 'wrap' }}>
                                        {groupedProducts[type].map(product => (
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
                    ))
                )}
            </div>

        </div>
    );
};

export default ProductList;
