import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Caroussel.css";

const Caroussel = () => {
  const navigate = useNavigate()
  const toAbout = () => {
    navigate('/about')
  }

  return(
    <div className="container carousel-container app-div"> {/* Updated className */}
      <Carousel>
        <Carousel.Item interval={5000}>     
              <center>
              <div className="contenu-carousel" style={{ maxWidth: '30em' }}>
                <h3 style={{fontFamily:'Canela Deck Trial'}}>LA PASSION DES SAVEURS</h3>
                <p style={{fontFamily:'Raleway'}}>Intégrées à notre quotidien, les épices sont chéries pour leurs saveurs, parfums et bienfaits sur la santé. Leur présence enrichit nos repas et nos vies, apportant une touche sensorielle tout en contribuant à notre bien-être. Les épices transcendent le simple goût pour devenir une expérience holistique.</p>
                <span className="btn savoir-plus" style={{background:'#f2e5d1',fontWeight:600,marginTop:'1em',color:'black',height:'2.5em',width:'10em',borderRadius:'8px',fontFamily:'Raleway'}} onClick={toAbout}>
                  En savoir plus
                </span>
              </div>
            </center> 
        </Carousel.Item>
        <Carousel.Item interval={5000}>     
              <center>
              <div className="contenu-carousel" style={{ maxWidth: '30em' }}>
                <h3 style={{fontFamily:'Canela Deck Trial'}}>EXPLOSION DE SAVEURS AVEC NOS EPICES UNIQUES</h3>
                <p style={{fontFamily:'Raleway'}}>
                Élevez vos plats en explorant les épices, éveillant vos sens et régalant vos papilles. Plongez dans une aventure culinaire où chaque saveur transporte, chaque arôme envoûte. Les épices transcendent la cuisine en une expérience sensorielle, ajoutant profondeur et vivacité à chaque bouchée. Découvrez le monde des saveurs avec nous.
                </p>
                <span className="btn savoir-plus" style={{background:'#f2e5d1',fontWeight:600,marginTop:'1em',color:'black',height:'2.5em',width:'10em',borderRadius:'8px',fontFamily:'Raleway'}} onClick={toAbout}>
                  En savoir plus
                </span>
              </div>
              </center> 
        </Carousel.Item>
        <Carousel.Item interval={4000}>     
              <center>
              <div className="contenu-carousel" style={{ maxWidth: '30em' }}>
                <h3 style={{fontFamily:'Canela Deck Trial'}}>DECOUVREZ L'ART DES EPICES</h3>
                <p style={{fontFamily:'Raleway'}}>
                  Embarquez pour un véritable périple le long de la route des épices avec Madepices. Découvrez un assortiment d'épices authentiques et exotiques du terroir, alliant traditions et nouveautés. Laissez-vous séduire par les arômes envoûtants et les saveurs riches, qui évoquent des voyages lointains et des cultures diverses. Une expérience sensorielle inédite vous attend, guidée par notre passion pour les épices.
                </p>
                <span className="btn savoir-plus" style={{background:'#f2e5d1',fontWeight:600,marginTop:'1em',color:'black',height:'2.5em',width:'10em',borderRadius:'8px',fontFamily:'Raleway'}} onClick={toAbout}>
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
