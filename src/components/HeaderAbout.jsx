import "./css/HeaderAbout.css"
import logo from "../images/a.png"
import { Link } from "react-router-dom"

<<<<<<< HEAD
export default function Header() {
=======
export default function HeaderAbout() {
>>>>>>> pana
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";              
    }   
    function closeNav() {
        document.getElementById("mySidenav").style.width = 0;
    }
    
    return (
        <>
<<<<<<< HEAD
            <div className="navbar sticky-top">
                <Link to={'/'}><img src={logo} className="logo--navbar" alt=""/></Link>
=======
            <div className="navbar navbar--about sticky-top">
                <Link to={'/'}><img src={logo} className="logo--navbar--about" alt=""/></Link>
>>>>>>> pana
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
<<<<<<< HEAD
                    <div className="btn icon-menu">
=======
                    <div className="btn icon-menu--about">
>>>>>>> pana
                        <i className="fa fas fa-bars fa-xl"></i>
                    </div>
                </nav>              
            </div>
        </>
    )
<<<<<<< HEAD
}

=======
}
>>>>>>> pana
