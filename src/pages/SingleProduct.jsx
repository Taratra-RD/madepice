import React from 'react'
import data from '../data'
import { useParams } from 'react-router-dom'

export default function SingleProduct() {
    const param = useParams()
    const element = null
    data.forEach(el => {
        if (element.name === param.name) {
            element = el
        }
    });

    console.log(element)
    return (
        <div>
            HELLO
            {
                data.map((data) =>  {
                    <h2 key={data.name} style={{color:'white'}}>
                        {data.name === param}
                    </h2>
                })
            }
        </div>
    )
}
