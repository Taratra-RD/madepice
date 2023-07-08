import "./css/Header.css"
import logo from "./a.png"
export default function Header() {
    return (
        <div className="header">
            <ul className="header--list">
                <li className="header--list--item">Nous</li>
                <li className="header--list--item">Nos Produits</li>
                <li className="header--list--item logo"><img src={logo} alt="" /></li>
                <li className="header--list--item">Boutique</li>
                <li className="header--list--item">Contact</li>
            </ul>
        </div>
    )
}

