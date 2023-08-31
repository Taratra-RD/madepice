import "./css/Header.css"
import logo2 from "../images/LOGO.png"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [scroll1, darkMode] = useState(0)
    const setDarkMode = () => {
        darkMode(window.scrollY)
    }
    useEffect(() => {
        window.addEventListener('scroll', setDarkMode)

        return () => {
            window.removeEventListener('scroll', setDarkMode)
        }

    }, [])
    //scrolling navbar
    const isScrollingNav = scroll1 > 100


    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen)
        if (navbarOpen === true) {
            document.getElementById("sidenav").style.height = '50%'

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
                            <Link to={'/'}>ACCUEIL</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>A PROPOS DE NOUS</Link>
                        </li>
                        <li>
                            <Link to={'/product'}>NOS PRODUITS</Link>
                        </li>
                        <li>
                            <Link to={'/recettes'}>NOS CONSEILS</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>CONTACT</Link>
                        </li>
                    </ul>

                </nav>
            </div>
            <div className={`navbar sticky-top ${isScrollingNav ? 'scrollingNavbar' : ''}`}>
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
                            <Link to={'/recettes'}>Recettes</Link>
                        </li>
                        <li>
                            <Link to={'/contact'} className='contact'>Contact</Link>
                        </li>
                    </ul>
                    <i className="fa fas fa-bars fa-xl" onClick={toggleNavbar}></i>
                </nav>

            </div>

        </>
    )
}

