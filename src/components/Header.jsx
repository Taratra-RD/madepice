import "./css/Header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

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
      document.getElementById("sidenav").style.height = "fit-content";
    } else if (navbarOpen === false) {
      document.getElementById("sidenav").style.height = "0em";
    }
  }, [navbarOpen]);

  const { t, i18n } = useTranslation();

  const handleClick = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="sidenav" id="sidenav">
        <nav>
          <ul className={`nav-links-sidenav ${navbarOpen ? "open" : ""}`}>
            <li>
              <Link to={"/"} style={{ fontFamily: "Canela Deck Trial" }}>
                {t("header.1").toUpperCase()}
              </Link>
            </li>
            <li>
              <Link to={"/about"} style={{ fontFamily: "Canela Deck Trial" }}>
                {t("header.2").toUpperCase()}
              </Link>
            </li>
            <li>
              <Link to={"/product"} style={{ fontFamily: "Canela Deck Trial" }}>
                {t("header.3").toUpperCase()}
              </Link>
            </li>
            <li>
              <Link to={"/contact"} style={{ fontFamily: "Canela Deck Trial" }}>
                {t("header.4").toUpperCase()}
              </Link>
            </li>
            <li>
              <select
                style={{
                  marginInline: "0rem 2rem",
                  backgroundColor: "gray",
                }}
                onChange={(e) => handleClick(e.target.value)}
                value={localStorage.getItem("i18nextLng")}
              >
                <option value="fr">fr</option>
                <option value="en">en</option>
              </select>
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
              <Link to={"/"}>{t("header.1")}</Link>
            </li>
            <li>
              <Link to={"/about"}>{t("header.2")}</Link>
            </li>
            <li>
              <Link to={"/product"}>{t("header.3")}</Link>
            </li>
            <li>
              <Link to={"/contact"} className="contact">
                {t("header.4")}
              </Link>
            </li>
            <li className="translation">
              <select
                style={{
                  marginInline: "0rem 2rem",
                  backgroundColor: "gray",
                }}
                onChange={(e) => handleClick(e.target.value)}
              >
                <option
                  value={localStorage.getItem("i18nextLng")}
                  selected
                  disabled
                  hidden
                >
                  {localStorage.getItem("i18nextLng")}
                </option>
                <option value="fr">fr</option>
                <option value="en">en</option>
              </select>
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
