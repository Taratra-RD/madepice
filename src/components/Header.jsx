import "./css/Header.css"
import logo from "./a.png"

export default function Header() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";              
    }   
    function closeNav() {
        document.getElementById("mySidenav").style.width = 0;
    }
    return (
        <>
            <div className="header">   
                <ul className="header--list">
                    <li className="header--list--item">Nous</li>
                    <li className="header--list--item">Nos Produits</li>
                    <li className="header--list--item logo"><img src={logo}/></li>
                    <li className="header--list--item">Boutique</li>
                    <li className="header--list--item">Contact</li>
                </ul>
                <button className="btn icon-bars" onClick={openNav}><i className="fa-solid fa-bars fa-xl" style={{color:'white'}}></i></button>
            </div>
            <div id="mySidenav" className="sidenav"> 
                <button className="btn" onClick={closeNav}><i className="fa-solid fa-close fa-lg" style={{color:'white',right:0}}></i></button>
            </div>
        </>
    )
}

