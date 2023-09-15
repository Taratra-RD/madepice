import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import video from "../../images/Landing_page2.mp4";
import "../css/Caroussel.css";
import { useTranslation } from "react-i18next";

const Caroussel = () => {
  const navigate = useNavigate();
  const toAbout = () => {
    navigate("/about");
  };

  const { t } = useTranslation();
  return (
    <div className="container-fluid carousel-container app-div">
      {/* Updated className */}
      <video autoPlay muted loop id="bg-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Carousel>
        <Carousel.Item interval={5000}>
          <center>
            <div className="contenu-carousel" style={{ maxWidth: "30em" }}>
              <h3 style={{ fontFamily: "Canela Deck Trial", color: "#f2e5d1" }}>
                {t("caroussel.1")}
              </h3>
              <p style={{ fontFamily: "Raleway" }}>{t("caroussel.2")}</p>
              <span
                className="btn savoir-plus"
                style={{
                  background: "#f2e5d1",
                  fontWeight: 600,
                  marginTop: "1em",
                  color: "black",
                  height: "2.5em",
                  width: "10em",
                  borderRadius: "8px",
                  fontFamily: "Raleway",
                }}
                onClick={toAbout}
              >
                {t("caroussel.5")}
              </span>
            </div>
          </center>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <center>
            <div className="contenu-carousel" style={{ maxWidth: "30em" }}>
              <h3 style={{ fontFamily: "Canela Deck Trial", color: "#f2e5d1" }}>
                {t("caroussel.3")}
              </h3>
              <p style={{ fontFamily: "Raleway" }}>{t("caroussel.4")}</p>
              <span
                className="btn savoir-plus"
                style={{
                  background: "#f2e5d1",
                  fontWeight: 600,
                  marginTop: "1em",
                  color: "black",
                  height: "2.5em",
                  width: "10em",
                  borderRadius: "8px",
                  fontFamily: "Raleway",
                }}
                onClick={toAbout}
              >
                {t("caroussel.5")}
              </span>
            </div>
          </center>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <center>
            <div className="contenu-carousel" style={{ maxWidth: "30em" }}>
              <h3 style={{ fontFamily: "Canela Deck Trial", color: "#f2e5d1" }}>
                {t("caroussel.6")}
              </h3>
              <p style={{ fontFamily: "Raleway" }}>{t("caroussel.7")}</p>
              <span
                className="btn savoir-plus"
                style={{
                  background: "#f2e5d1",
                  fontWeight: 600,
                  marginTop: "1em",
                  color: "black",
                  height: "2.5em",
                  width: "10em",
                  borderRadius: "8px",
                  fontFamily: "Raleway",
                }}
                onClick={toAbout}
              >
                {t("caroussel.5")}
              </span>
            </div>
          </center>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Caroussel;
