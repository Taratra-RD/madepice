import { useTranslation } from "react-i18next";
import "./css/Footer.css";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer container-fluid" style={{ color: "white" }}>
      <div className="logo--footer"></div>
      <div className="contact--footer">
        <p style={{ color: "#F2E5D1B2" }}>{t("header.4")}</p>
        <NavLink to={`tel:${+261343413481}`}>
          <p>+261 34 34 134 81</p>
        </NavLink>
        <a
          href={`mailto:${"commercial@madepices.mg"}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>commercial@madepices.mg</p>
        </a>
      </div>
      <div className="local--footer">
        <p style={{ color: "#F2E5D1B2" }}>{t("footer.1")}</p>
        <p>Ivato Aeroport , Antananarivo </p>
        <a
          href={`mailto:${"commercial@madepices.mg"}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>commercial@madepices.mg</p>
        </a>
      </div>
      <div className="follow--footer">
        <p style={{ color: "#F2E5D1B2" }}>{t("footer.2")}</p>
        <br />
        <Link to="https://www.facebook.com/MadepicesMadagascar">
          <i
            className="fa fab fa-facebook fa-2xl"
            style={{
              color: "white",
              marginRight: "0.7em",
              marginLeft: "0",
              cursor: "pointer",
            }}
          ></i>
        </Link>
        <Link to="http://www.instagram.com">
          <i
            className="fa fab fa-instagram fa-2xl"
            style={{ color: "white", cursor: "pointer" }}
          ></i>
        </Link>
      </div>
    </div>
    //     <div className="local--footer">
    //       <p style={{ color: "#F2E5D1B2" }}>Où nous trouver</p>
    //       <p style={{ fontSize: "13px" }}>
    //         IVATO AEROPORT , ANTANANARIVO, Madagascar
    //       </p>
    //       <p>commercial@madépices.mg</p>
    //     </div>
    //     <div className="follow--footer">
    //       <p style={{ color: "#F2E5D1B2" }}>Suivez-nous</p>
    //       <br />
    //       <Link to="https://www.facebook.com/MadepicesMadagascar">
    //         <i
    //           className="fa fab fa-facebook fa-2xl"
    //           style={{
    //             color: "white",
    //             marginRight: "0.8em",
    //             marginLeft: "5px",
    //             cursor: "pointer",
    //           }}
    //         ></i>
    //       </Link>
    //       <Link to="http://www.instagram.com">
    //         <i
    //           className="fa fab fa-instagram fa-2xl"
    //           style={{ color: "white", cursor: "pointer" }}
    //         ></i>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}
