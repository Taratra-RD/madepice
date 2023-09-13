import "./css/Header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scroll1, darkMode] = useState(0);
  const setDarkMode = () => {
    darkMode(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", setDarkMode);
    return () => {
      window.removeEventListener("scroll", setDarkMode);
    };
  }, []);
  //scrolling navbar
  const isScrollingNav = scroll1 > 0;
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  useEffect(() => {
    if (navbarOpen === true) {
      document.getElementById("sidenav").style.height = "45vh";
    } else if (navbarOpen === false) {
      document.getElementById("sidenav").style.height = "0em";
    }
  }, [navbarOpen]);

  return (
    <>
      <div className="sidenav" id="sidenav">
        <nav>
          <ul className={`nav-links-sidenav ${navbarOpen ? "open" : ""}`}>
            <li>
              <Link to={"/"} style={{ fontFamily: "Canela Deck Trial" }}>
                ACCUEIL
              </Link>
            </li>
            <li>
              <Link to={"/about"} style={{ fontFamily: "Canela Deck Trial" }}>
                A PROPOS DE NOUS
              </Link>
            </li>
            <li>
              <Link to={"/product"} style={{ fontFamily: "Canela Deck Trial" }}>
                NOS PRODUITS
              </Link>
            </li>
            <li>
              <Link to={"/contact"} style={{ fontFamily: "Canela Deck Trial" }}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`navbar sticky-top ${
          isScrollingNav ? "scrollingNavbar" : ""
        }`}
      >
        <Link to={"/"}>
          <div className="logo--navbar" alt=""></div>
        </Link>

        <nav>
          <ul className={`nav-links ${navbarOpen ? "open" : ""}`}>
            <li>
              <Link to={"/"}>Accueil</Link>
            </li>
            <li>
              <Link to={"/about"}>A propos de nous</Link>
            </li>
            <li>
              <Link to={"/product"}>Nos produits</Link>
            </li>
            <li>
              <Link to={"/contact"} className="contact">
                Contact
              </Link>
            </li>
          </ul>
          <i
            className={`fa fas ${
              navbarOpen ? "fa-bars fa-xl" : "fa-bars fa-xl"
            } `}
            style={{ transition: "0.5s all" }}
            onClick={() => toggleNavbar()}
          ></i>
        </nav>
      </div>
    </>
  );
}
