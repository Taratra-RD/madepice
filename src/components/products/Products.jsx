import React, { useState } from 'react'
import './css/Products.css'
import HeaderAbout from '../HeaderAbout'
import Footer from '../Footer'
import upleave from '../../images/Leaves 1 (1).png'
import downleave from '../../images/Leaves 2 (1).png'
import {data} from '../../data'
import Productslist from './Productslist'
import Cardproduct from './Cardproduct'

export default function Products() {
    const [products, setProducts] = useState(data)
    const [leaveup, setLeaveup] = useState('leave--up')
    const [leavedown, setLeavedown] = useState('leave--down')
    const [selectedLetter, setSelectedLetter] = useState('');

    const groupProductsAlphabetically = (products) => {
        const grouped = {};
        products.forEach((product) => {
            const firstLetter = product.name[0].toUpperCase();
            if (!grouped[firstLetter]) {
                grouped[firstLetter] = [];
            }
            grouped[firstLetter].push(product);
        });
        return grouped;
    };

    const groupedProducts = groupProductsAlphabetically(products);

    const handleLeave = (e) => {
        setLeaveup(() => (e.target.className = " leave--up--animation"))
    }

    return (
        <div className='--products'>
            <div className="product--header--image">
                <div className="product--header">
                    {/* <HeaderAbout /> */}
                </div>
                {/* <div className='product--header--text' style={{ textAlign: 'center' }}>
                    Nos Produits
                </div> */}
            </div>
            <div className="products">
                <div className="product--left--page">
                    <h1>Filtrer</h1>
                    <div className='list-filter'>
                        <label>
                            <input
                                type="radio"
                                value=""
                                checked={selectedLetter === ''}
                                onChange={() => setSelectedLetter('')}
                            />
                            Tous
                        </label>
                        {Object.keys(groupedProducts).map(letter => (
                            <label key={letter}>
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
                </div>
                <div className='hr'></div>
                <div className="product--right--page">
                    <h1>La liste de nos produits</h1>
                    <div>
                        {selectedLetter === '' ? (
                            Object.keys(groupedProducts).map(letter => (
                                <div key={letter} className='product--list'>
                                    <Productslist selectedLetter={letter} groupedProducts={groupedProducts[letter]} />
                                </div>
                            ))
                        ) : (
                            selectedLetter in groupedProducts && (
                                <div key={selectedLetter} className='product--list'>
                                    <Productslist selectedLetter={selectedLetter} groupedProducts={groupedProducts[selectedLetter]} />
                                </div>
                            )
                        )}
                    </div>

                </div>
            </div>


        </div>
    )
}
