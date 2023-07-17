import "./css/Header.css"
import logo from "./a.png"
import { Nav, Link} from "react-router-dom"
export default function Header() {
    return (
        <div className="header">
            <ul className="header--list">
                <Link to="" className="header--list--item" style={{color:'white',textDecoration:'none'}}>Nous</Link>
                <Link to ="" className="header--list--item" style={{color:'white',textDecoration:'none'}}>Nos Produits</Link>
                <Link to ="" className="header--list--item logo"><img src={logo} alt="" /></Link>
                <Link to="" className="header--list--item" style={{color:'white',textDecoration:'none'}}>Boutique</Link>
                <Link to="" className="header--list--item" style={{color:'white',textDecoration:'none'}}>Contact</Link>
            </ul>
        </div>
    )
}

