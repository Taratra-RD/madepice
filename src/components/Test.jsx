import React, { useState } from 'react'
import ProductList from './ProductList';
import data from '../data'

export default function Test(props) {
    const filteredData = data.reduce((acc, item) => {
        const firstLetter = item.name[0].toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(item);
        return acc;
    }, {});

    const AlphabeticalList = () => {
        const filteredData = data.reduce((acc, item) => {
            const firstLetter = item.name[0].toUpperCase();
            if (!acc[firstLetter]) {
                acc[firstLetter] = [];
            }
            acc[firstLetter].push(item);
            return acc;
        }, {});
    }
    return (
        <div>
            {Object.keys(filteredData).map((letter) => (
                <div key={letter}>
                    <h2>{letter}</h2>
                    {filteredData[letter].map((item) => (
                        <div key={item.name}>
                            <h3>{item.name}</h3>
                            {/* Render other item details here */}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
