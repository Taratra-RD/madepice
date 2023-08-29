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
                <p style={{fontFamily:'Raleway'}}>Sublimez vos plats en s'aventurant culinairement à travers les épices qui vont réveiller vos sens et vos papilles.</p>
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
                <p style={{fontFamily:'Raleway'}}>Véritable voyage à travers la route des épices ; Madepices vous fera découvrir les épices du terroir à la fois traditionnelles et exotiques.</p>
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
