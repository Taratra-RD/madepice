import React, { useState } from 'react'
import ProductList from './ProductList';

export default function Test() {
    const [products, setProducts] = useState([
        {
            "id": 1,
            "type": "grain",
            "name": "café"
        },
        {
            "id": 2,
            "type": "moulu",
            "name": "café"
        },
        {
            "id": 3,
            "type": "moulu",
            "name": "café"
        },
        {
            "id": 4,
            "type": "moulu",
            "name": "café"
        },
        {
            "id": 5,
            "type": "moulu",
            "name": "café"
        },
        {
            "id": 6,
            "type": "moulu",
            "name": "café"
        },
        {
            "id": 7,
            "type": "moulu",
            "name": "café"
        },
        {
            "id": 8,
            "type": "moulu",
            "name": "café"
        },
        {
            "id": 9,
            "type": "grain",
            "name": "café"
        },
        {
            "id": 10,
            "type": "grain",
            "name": "café"
        },
        {
            "id": 11,
            "type": "grain",
            "name": "café"
        },
        {
            "id": 12,
            "type": "moulu",
            "name": "café"
        },
        {
            "id": 13,
            "type": "tige",
            "name": "café"
        },
        {
            "id": 14,
            "type": "moulu",
            "name": "café"
        },
        {
            "id": 15,
            "type": "tige",
            "name": "café"
        },
        {
            "id": 16,
            "type": "moulu",
            "name": "café"
        },
        {
            "id": 18,
            "type": "moulu",
            "name": "café"
        },
        {
            "id": 19,
            "type": "moulu",
            "name": "café"
        },
        {
            "id": 20,
            "type": "moulu",
            "name": "café"
        },
        {
            "id": 21,
            "type": "moulu",
            "name": "café"
        }
    ])

    function groupProductsByType(products) {
        const groupedProducts = {};
        products.forEach(product => {
            if (!groupedProducts[product.type]) {
                groupedProducts[product.type] = [];
            }
            groupedProducts[product.type].push(product);
        });
        return groupedProducts;
    }

    return (
        <div>
            <h1>Product List</h1>
            <ProductList products={products} groupProductsByType={groupProductsByType} />
        </div>
    )
}

