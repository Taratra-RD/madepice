import { useState } from 'react'
import HeaderAbout from '../components/HeaderAbout'
import './css/Product.css'
import Footer from '../components/Footer'
import upleave from '../images/Leaves 1 (1).png'
import downleave from '../images/Leaves 2 (1).png'
import ProductList from '../components/ProductList'
import {data} from '../data'

function Product() {

    const [products, setProducts] = useState(data)
    const [leaveup, setLeaveup] = useState('leave--up')
    const [leavedown, setLeavedown] = useState('leave--down')
    const [displayProduct, setDisplayProduct] = useState(true)

    const handledisplay = () => {
        setDisplayProduct((prevState) => !prevState)
    }

    // function groupProductsByType(products) {
    //     const groupedProducts = {};
    //     products.forEach(product => {
    //         if (!groupedProducts[product.Intensité]) {
    //             groupedProducts[product.Intensité] = [];
    //         }
    //         groupedProducts[product.Intensité].push(product);
    //     });
    //     return groupedProducts;
    // }

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

    const handleLeave = (e) => {
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
                        {/* <Test products={products} groupProductsByType={groupProductsByType} displayProduct={displayProduct} setDisplayProduct={setDisplayProduct} /> */}
                        <ProductList products={products} groupProductsByType={groupProductsAlphabetically} displayProduct={displayProduct} setDisplayProduct={setDisplayProduct} />
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
