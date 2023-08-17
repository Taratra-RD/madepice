import "./css/Header.css"
import logo from "../images/a.png"
import logo2 from "../images/LOGO.png"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen)
        if (navbarOpen === true) {
            document.getElementById("sidenav").style.height = '45%'

        } else {
            document.getElementById("sidenav").style.height = '0em'
        }
    }

    return (
        <>
            <div className="sidenav" id="sidenav">
                <nav>
                    <ul className={`nav-links-sidenav ${navbarOpen ? 'open' : ''}`}>
                        <li>
                            <Link to={'/'} style={{ color: 'white' }}>Accueil</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>A propos de nous</Link>
                        </li>
                        <li>
                            <Link to={'/product'}>Nos produits</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Recettes</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Contact</Link>
                        </li>
                    </ul>

                </nav>
            </div>
            <div className={`navbar sticky-top shadow`}>
                <Link to={'/'}>
                    <img src={logo2} className="logo--navbar--about" alt="" />
                </Link>

                <nav>
                    <ul className={`nav-links ${navbarOpen ? 'open' : ''}`}>
                        <li>
                            <Link to={'/'}>Accueil</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>A propos de nous</Link>
                        </li>
                        <li>
                            <Link to={'/product'}>Nos produits</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Recettes</Link>
                        </li>
                        <li>
                            <Link to={'/'} className='contact'>Contact</Link>
                        </li>
                    </ul>
                    <i className="fa fas fa-bars fa-xl" onClick={toggleNavbar}></i>
                </nav>

            </div>

        </>
    )
}

