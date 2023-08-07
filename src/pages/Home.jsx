
import { useRef,useEffect } from "react";
import "./css/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Caroussel from "../components/home/Caroussel";
import imgFont1 from "../images/Product.png";
import imgFont2 from "../images/Rectangle 49.png";
import imgFont3 from "../images/Rectangle 51.png";
import Card from "../components/home/Card";
import { Col, Container, Row } from "react-bootstrap";

function Home() {
  const slideElements = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-left');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);

    slideElements.current.forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect(); // Cleanup on unmount
    };
  }, []);
  return (
    <>
      <div className="home">
        <Header />
        <div className="container-fluid">
          <Caroussel/>
        </div>
        <div className="container-fluid img1">
          <center>
          <div className="cards">
            <Row>
              <Col>
                <Card img={imgFont1} title={'Article 1'} text={'Ahdzhudh hdzuduh dazdjijoi eufhuh uzhduhzuihda fnsndsjdh hzuh.'} />
              </Col>
              <Col>
                <Card img={imgFont1} title={'Article 1'} text={'Ahdzhudh hdzuduh dazdjijoi eufhuh uzhduhzuihda fnsndsjdh hzuh.'} />
              </Col>
              <Col>
                <Card img={imgFont1} title={'Article 1'} text={'Ahdzhudh hdzuduh dazdjijoi eufhuh uzhduhzuihda fnsndsjdh hzuh.'} />
              </Col>
              <Col>
                <Card img={imgFont1} title={'Article 1'} text={'Ahdzhudh hdzuduh dazdjijoi eufhuh uzhduhzuihda fnsndsjdh hzuh.'} />
              </Col>
            </Row>
          </div>
          </center>
        </div>
        <div className="container-fluid img2">
          <Container>
            <h2 className="slide-left" style={{marginBottom:'0.5em',fontFamily:'Canela'}} ref={el => slideElements.current.push(el)}>
              DES EPICES AUX GOUTS AUTHENTIQUES, RECOLTEES DIRECTEMENT CHEZ LES CULTIVATEURS
            </h2>
            <p className="slide-left" style={{fontFamily:'Raleway'}} ref={el => slideElements.current.push(el)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum animi unde itaque aut accusamus, repellat quae, tempore neque amet quaerat. Ipsam quibusdam sapiente vitae!
            </p>
            <button className="btn slide-left" style={{background:'#f2e5d1',marginTop:'1.5em',color:'black',height:'3.5em',borderRadius:'9px',paddingLeft:'30px',paddingRight:'30px',fontFamily:'Raleway',fontWeight:'500'}} ref={el => slideElements.current.push(el)}> 
              Découvrez notre histoire
            </button>
          </Container>
          <div className="img-feuille">
          </div>
        </div>
        <div className="container-fluid img3">
          <Container style={{alignContent:'center'}}>
            <h3 style={{textAlign:'center',paddingTop:'2em',paddingBottom:'0.7em',fontFamily:'Canela'}}>NOS ENGAGEMENTS</h3>
            <div className="block">
            </div>
            <h3 style={{textAlign:'center',paddingTop:'2em',paddingBottom:'0.7em',fontFamily:'Canela'}}>NOS VALEURS</h3>
            <div className="block">
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
