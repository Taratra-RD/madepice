import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data'

export default function SingleProduct({product}) {
    const [dataAr,setDataAr] = useState(data)
    const product_name = useParams()
    console.log(product_name)
    console.log(data)
    return (
        <div>
            HELLO
            {
                data.map((data) =>  {
                    <h2 key={data.name} style={{color:'white'}}>
                        {data.name === product_name}
                    </h2>
                })
            }
        </div>
    )
}
