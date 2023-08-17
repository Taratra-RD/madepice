import { useState } from 'react'
import HeaderAbout from '../components/HeaderAbout'
import './css/Product.css'
import Footer from '../components/Footer'
import upleave from '../images/Leaves 1 (1).png'
import downleave from '../images/Leaves 2 (1).png'
import ProductList from '../components/ProductList'
function Product() {

    const [products, setProducts] = useState([
        {
            "id": 1,
            "type": "grain",
            "name": "café"
        },
        {
            "id": 2,
            "type": "tige",
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
            "type": "tige",
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
    const [leaveup, setLeaveup] = useState('leave--up')
    const [leavedown, setLeavedown] = useState('leave--down')
    const [displayProduct, setDisplayProduct] = useState(true)
    // const [typeProduct, setTypeProduct] = useState(['moulu', 'grain', 'tige'])

    const handledisplay = () => {
        setDisplayProduct((prevState) => !prevState)
    }

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

    const handleLeave = (e) => {
        console.log("first")
        setLeaveup(() => (e.target.className = " leave--up--animation"))
    }

    return (
        <div className="product">
            <div className="product--header--image">
                <div className="product--header">
                    <HeaderAbout />
                </div>
                <div className='product--header--text' style={{ textAlign: 'center' }}>
                    Nos Produits
                </div>
            </div>
            <div className="product--body">
                <div className="product--body--list container">
                    <div className="product--sorting">
                        <table className="left--sorting" style={{ marginLeft: '20px' }}>
                            <tr className="filter--product">
                                <td>Filtrer </td>
                                <td style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}><i className='fas fa-folder-tree' style={{ fontSize: '25px' }}></i></td>

                            </tr>
                            <tr className="filter--product">
                                <td>Style </td>
                                <td style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}><i className={displayProduct ? 'fas fa-grip' : 'fas fa-grip-vertical'} onClick={handledisplay}></i></td>
                            </tr>
                        </table>
                        <div className="right--sorting">
                            {/* <div className="filter--product">
                                <p>Sort: Best selling</p>
                                <i className='fas fa-chevron-down'></i>
                            </div> */}
                            <div className="filter--product">
                                <p><span>{products.length}</span> products</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={upleave} className={leaveup} onScroll={handleLeave} alt="" />
                        <ProductList products={products} groupProductsByType={groupProductsByType} displayProduct={displayProduct} setDisplayProduct={setDisplayProduct} />
                    </div>
                </div>
            </div>
            <div className="product--footer">
                <img src={downleave} className={leavedown} alt='' />
                <Footer />
            </div>
        </div>
    )
}

export default Product
