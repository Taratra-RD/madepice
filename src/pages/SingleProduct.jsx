import React, { useState } from 'react'
import {data} from '../data'
import { useParams } from 'react-router-dom'

export default function SingleProduct() {
    const param = useParams()
    const [product,setProduct] = useState(data)
    const filteredProduct = product.filter(data => data.name === param.name)
    console.log(filteredProduct)

    return (
        <div>
            HELLO
            {
                filteredProduct.map((data) => {
                    <div className='bg-warning'>
                        <h2 key={data.name} style={{ color: 'white' }}>
                            {data.name}
                        </h2>
                        <p>
                            {data.Description}
                        </p>
                    </div>
                })
            }
        </div>
    )
}
