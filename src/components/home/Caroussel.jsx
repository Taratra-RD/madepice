import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import video from "../../images/Landing_page2.mp4";
import "../css/Caroussel.css";

const Caroussel = () => {
  const navigate = useNavigate();
  const toAbout = () => {
    navigate("/about");
  };

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
                LA PASSION DES SAVEURS
              </h3>
              <p style={{ fontFamily: "Raleway" }}>
                Intégrées à notre quotidien, les épices sont chéries pour leurs
                saveurs, parfums et bienfaits sur la santé. Leur présence
                enrichit nos repas et nos vies, apportant une touche sensorielle
                tout en contribuant à notre bien-être. Les épices transcendent
                le simple goût pour devenir une expérience holistique.
              </p>
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
                En savoir plus
              </span>
            </div>
          </center>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <center>
            <div className="contenu-carousel" style={{ maxWidth: "30em" }}>
              <h3 style={{ fontFamily: "Canela Deck Trial", color: "#f2e5d1" }}>
                EXPLOSION DE SAVEURS AVEC NOS EPICES UNIQUES
              </h3>
              <p style={{ fontFamily: "Raleway" }}>
                Élevez vos plats en explorant les épices, éveillant vos sens et
                régalant vos papilles. Plongez dans une aventure culinaire où
                chaque saveur transporte, chaque arôme envoûte. Les épices
                transcendent la cuisine en une expérience sensorielle, ajoutant
                profondeur et vivacité à chaque bouchée. Découvrez le monde des
                saveurs avec nous.
              </p>
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
                En savoir plus
              </span>
            </div>
          </center>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <center>
            <div className="contenu-carousel" style={{ maxWidth: "30em" }}>
              <h3 style={{ fontFamily: "Canela Deck Trial", color: "#f2e5d1" }}>
                DECOUVREZ L'ART DES EPICES
              </h3>
              <p style={{ fontFamily: "Raleway" }}>
                Partez pour un voyage sensoriel avec Madepices, explorant des
                épices authentiques, mêlant traditions et nouveautés. Succombez
                aux arômes envoûtants et aux saveurs exotiques, une expérience
                unique guidée par notre passion.
              </p>
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
                En savoir plus
              </span>
            </div>
          </center>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Caroussel;
