import React from 'react'


export default function SingleProduct() {
    const data = {
        name: "ail",
        Goût: "Piquant",
        Intensité: ["Forte"],
        Texture: ["poudre", "morceau"],
        Origine_géographique: "Madagascar",
        Conservation: "endroit frais et sec",
        Composition_nutritionnelle: [
            "potassium",
            "composés sulfurés",
            {
                vitamines: ["B", "C"]
            },
            {
                mineraux: ["calcium", "fer"]
            }
        ],
        Grammage: [
            {
                unite: "en vrac (1-5 kg)"
            },
            {
                liste: [25, 100, 120, 300]
            }
        ],
        Description: "L'ail est une plante à bulbe appartenant à la famille des Alliacées. L'ail a un goût piquant et une odeur forte et caractéristique. C'est cette saveur distinctive qui fait de l'ail un ingrédient populaire dans de nombreuses cuisines du monde entier. Dans la cuisine, l'ail est largement utilisé comme ingrédient dans de nombreux plats, notamment les soupes, les sauces, les marinades et les plats sautés. Il peut être consommé cru, cuit ou séché.L'ail est réputé pour ses propriétés médicinales. Il est considéré comme bénéfique pour la santé cardiovasculaire, la gestion du cholestérol, la régulation de la pression artérielle et la stimulation du système immunitaire. Ces caractéristiques font de l'ail un ingrédient polyvalent en cuisine et bénéfique pour la santé,"
    }

    const formatValue = (keys, value) => {
        if (Array.isArray(value)) {
            if (value.length === 1) {
                return value[0]
            } else if (value.length === 2 && typeof value[0] === "string" && typeof value[0] === "string") {
                return `${value[0]} et ${value[1]}`
            } else if (value.length > 2) {
                let chain = []
                value.forEach(val => {
                    if (typeof val === "string") {
                        chain.push(val)
                    } else {
                        const [key, innerValue] = Object.entries(val)[0]
                        chain.push(`${key} ${innerValue.join(" et ")}`)
                    }
                })
                return chain.join(', ')
            }
        } else if (typeof value === "string") {
            return value
        } else if (keys === "Grammage") {
            console.log("first")
            return `${value.liste.join('g, ')} ${value.unite}`
        }
    }
    return (
        <div className='single--product'>
            <div className='single--product--left'>

            </div>
            <hr />
            <div className='single--product--right'>
                {
                    Object.entries(data).map(([key, value]) =>
                    (
                        <div className={`product--${key}`}>
                            {
                                `${key} : ${formatValue(key, value)}`
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
