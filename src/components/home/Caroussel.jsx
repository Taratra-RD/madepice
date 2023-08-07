import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import imgFont1 from "../../images/ajx.png";
import imgFont2 from "../../images/fond.png";
import imgFont3 from "../../images/fond.jpg";
import "../css/Caroussel.css";

const Caroussel = () => {
  return (
    <div className="carousel-container"> {/* Updated className */}
      <Carousel>
        <Carousel.Item interval={3000}>
          <center>
            <div className="contenu-carousel" style={{ maxWidth: '30em' }}>
              <h3 style={{fontFamily:'Canela'}}>LA PASSION DES SAVEURS</h3>
              <p style={{fontFamily:'Raleway'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit corrupti, consequuntur at reiciendis nihil excepturi tenetur quidem, facere quia sit pariatur laudantium, ea dignissimos tempore amet nam ducimus asperiores sequi natus dolore optio. Voluptates, tempore vel quos accusamus eligendi quibusdam.</p>
              <span className="btn" style={{background:'#f2e5d1',marginTop:'1em',color:'black',height:'2.5em',width:'10em',borderRadius:'8px',fontFamily:'Raleway'}}>
                En savoir plus
              </span>
            </div>
          </center>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <center>
            <div className="contenu-carousel" style={{ maxWidth: '30em' }}>
              <h3 style={{fontFamily:'Canela'}}>EXPLOSION DE SAVEURS AVEC NOS EPICES UNIQUES</h3>
              <p style={{fontFamily:'Raleway'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores corrupti tempora eos quisquam voluptas aspernatur doloremque sunt libero, qui placeat pariatur excepturi error optio voluptatibus non commodi? Quam, quibusdam explicabo.</p>
              <span className="btn" style={{background:'#f2e5d1',marginTop:'1em',color:'black',height:'2.5em',width:'10em',borderRadius:'8px',fontFamily:'Raleway'}}>
                En savoir plus
              </span>
            </div>
          </center>
        </Carousel.Item>
        <Carousel.Item>
          <center>
            <div className="contenu-carousel" style={{ maxWidth: '30em' }}>
              <h3 style={{fontFamily:'Canela'}}>DECOUVREZ L'ART DES EPICES</h3>
              <p style={{fontFamily:'Raleway'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, corporis possimus. Fugit, corporis. Sint, ducimus, enim assumenda quaerat consequatur in reprehenderit nam explicabo recusandae tempore facilis magni sit! Numquam, odio.</p>
              <span className="btn" style={{background:'#f2e5d1',marginTop:'1em',color:'black',height:'2.5em',width:'10em',borderRadius:'8px',fontFamily:'Raleway'}}>
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
