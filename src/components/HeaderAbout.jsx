import "./css/HeaderAbout.css"
import logo from "../images/a.png"
import { Link } from "react-router-dom"

export default function HeaderAbout() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";              
    }   
    function closeNav() {
        document.getElementById("mySidenav").style.width = 0;
    }
    
    return (
        <>
            <div className="navbar navbar--about sticky-top">
                <Link to={'/'}><img src={logo} className="logo--navbar--about" alt=""/></Link>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}>Accueil</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>A propos de nous</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Nos produits</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Recettes</Link>
                        </li>
                        <li>
                            <Link to={'/'} className='contact'>Contact</Link>
                        </li>
                    </ul>
                    <div className="btn icon-menu--about">
                        <i className="fa fas fa-bars fa-xl"></i>
                    </div>
                </nav>              
            </div>
        </>
    )
}