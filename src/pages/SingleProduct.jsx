import React, { useEffect, useState } from 'react'
import { data } from '../data'
import { useParams } from 'react-router-dom'

export default function SingleProduct() {
    const [product, setProduct] = useState(data)
    const param = useParams()

    const filteredProduct = product.filter((product) => product.name === param.name)
    const findProduct = product.find((product) => product.name === param.name)


    console.log(param.name)
    console.log('method filter: '+filteredProduct)
    console.log('method find'+findProduct)

    useEffect(() => {
        console.log(data)
        console.log(filteredProduct)
        console.log(findProduct)
    }, [])

    return (
        <>
            <div style={{ background: 'blue' }}>
                HELLO babababa
                {
                    filteredProduct.map((dataPr) => (
                        <div>
                            <h2 key={dataPr.name} style={{ color: 'white' }}>
                                {dataPr.name}
                            </h2>
                            <p>
                                {dataPr.Description}
                            </p>
                        </div>
                    )
                    )
                }
            </div>
        </>
    )
}
