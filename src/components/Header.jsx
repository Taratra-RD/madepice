import "./css/Header.css"
import logo from "./a.png"
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <>
            <div className="navbar">
                <Link to={'/'}><img src={logo} className="logo--navbar" alt=""/></Link>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}>Accueil</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Accueil</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Accueil</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Accueil</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Accueil</Link>
                        </li>
                    </ul>
                    <button className="btn icon-menu">
                        <i className="fa fas fa-bars"></i>
                    </button>
                </nav>
                
            </div>
        </>
    )
}

