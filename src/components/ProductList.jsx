import React, { useState } from 'react';
import CardPro from './CardPro'
import CardProLittl from './CardproLittl'
import './css/ProductList.css'

const ProductList = ({ products, groupProductsByType, displayProduct }) => {
    const [selectedType, setSelectedType] = useState('');
    const groupedProducts = groupProductsByType(products);

    const filteredProducts = selectedType ? groupedProducts[selectedType] : products;

    return (
        <div className='row'>
            <div className="col-3">
                <h1>Filter</h1>
                <label>
                    <input
                        type="radio"
                        value=""
                        checked={selectedType === ''}
                        onChange={() => setSelectedType('')}
                    />
                    All
                </label>
                {Object.keys(groupedProducts).map(type => (
                    <label key={type}>
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
            <div className="col-9">
                <h1>Product List</h1>
                {selectedType === '' ? (
                    Object.keys(groupedProducts).map(type => (
                        <div key={type} className='product--list'>
                            <h2>{type}</h2>
                            <div className="product--list--card">
                                {groupedProducts[type].map(product => (
                                    displayProduct ? (
                                        <div className="card--a">
                                            <CardPro />
                                        </div>
                                    ) : (
                                        <div className="card--a">
                                            <CardProLittl />
                                        </div>
                                    )
                                ))}
                            </div>

                        </div>
                    ))
                ) : (
                    Object.keys(groupedProducts).map(type => (
                        selectedType === type && (
                            <div key={type} className='product--list'>
                                <h2>{type}</h2>
                                <div className="product--list--card">
                                    {groupedProducts[type].map(product => (
                                        displayProduct ? (
                                            <div className="card--a">
                                                <CardPro />
                                            </div>
                                        ) : (
                                            <div className="card--a">
                                                <CardProLittl />
                                            </div>
                                        )
                                    ))}
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
