import "./css/Footer.css"
import { Link } from "react-router-dom"
import logo from '../images/a.png'

export default function Footer() {
    return (
        <div className="footer container-fluid" style={{color:'white'}}>
            <div className="logo--footer">
            </div>
            <div className="container" style={{right:0}}>
                <div className="contact--footer">
                    <p style={{color:'#F2E5D1B2'}}>Contact</p>
                    <p>+261 34 34 134 81</p>
                    <p>commercial@madépices.mg</p>
                </div>
                <div className="local--footer">
                    <p style={{color:'#F2E5D1B2'}}>Où nous trouver</p>
                    <p>405 Boulevard Ratsimandrava</p>
                    <p>commercial@madépices.mg</p>
                </div>
                <div className="follow--footer">
                    <p style={{color:'#F2E5D1B2'}}>Suivez-nous</p><br/>
                    <Link to='https://www.facebook.com/MadepicesMadagascar'>
                        <i className="fa fab fa-facebook fa-2xl" style={{color:'white',marginRight:'0.8em',marginLeft:'5px',cursor:'pointer'}}></i>
                    </Link>
                    <Link to='http://www.instagram.com'>
                        <i className="fa fab fa-instagram fa-2xl" style={{color:'white',cursor:'pointer'}}></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

