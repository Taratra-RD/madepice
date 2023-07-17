import "./css/Header.css"
import logo from "./a.png"
export default function Header() {
    return (
        <div className="header container">
            <ul className="header--list">
                <li className="header--list--item">Nous</li>
                <li className="header--list--item">Nos Produits</li>
                <li className="header--list--item logo"><img src={logo}/></li>
                <li className="header--list--item">Boutique</li>
                <li className="header--list--item">Contact</li>
            </ul>
            <div style={{}}><i className="fa fa-solid fa-facebook icon-bars"></i>Bars</div>
        </div>
    )
}

