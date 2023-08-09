
import { useEffect, useState } from "react";
import "./css/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Caroussel from "../components/home/Caroussel";

import imgFont1 from "../images/Rectangle 11.png";

import Card from "../components/home/Card";
import { Col, Container, Row } from "react-bootstrap";

function Home() {

  const [scroll, whiteMode] = useState(0)

  const setWhiteMode = () => {
    whiteMode(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', setWhiteMode)

    return () => {
      window.removeEventListener('scroll', setWhiteMode)
    }

  }, [])

  const isScrolling = scroll > 600
  const isScrolling2 = scroll > 100

  const cardData = [
    { img: imgFont1, title: "OLI" },
    { img: imgFont1, title: "OLI" },
    { img: imgFont1, title: "PRODUCT 1" },
    { img: imgFont1, title: "PRODUCT 2" }
    // Add more card data
  ];

  return (
    <>
      <div className="home">
        <Header />
        <div className="container-fluid">
          <Caroussel />
        </div>
        <div className="container-fluid img1">
          <center>
            <div className="cards">
              <Row>
                {
                  cardData.map((card) =>
                    <Col xl={3} lg={3} md={6} sm={6} xs={12}>
                      <Card
                        key={card.title}
                        img={card.img}
                        title={card.title}
                        className={'spacing'}
                        text={'Lorem ipsum dolor sit amet consectetur. Mi sodales quam ornare lacus ornare feugiat fezr ze...'}
                      />
                    </Col>
                  )
                }
              </Row>
            </div>
            </center>
        </div>
        <div className="container-fluid img2">
          <Container>
            <h2 className={`${isScrolling ? "slide-left" : ''}`} style={{ marginTop: '0em',marginBottom: '0.5em', fontFamily: 'Canela Deck Trial' }}>
              DES EPICES AUX GOUTS AUTHENTIQUES, RECOLTEES DIRECTEMENT CHEZ LES CULTIVATEURS
            </h2>
            <p className={`${isScrolling ? "slide-left" : ''}`} style={{ fontFamily: 'Raleway' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum animi unde itaque aut accusamus, repellat quae, tempore neque amet quaerat. Ipsam quibusdam sapiente vitae!
            </p>
            <button className={`btn ${isScrolling ? "slide-left" : ''}`} style={{ background: '#f2e5d1', marginTop: '1.2em', color: 'black', height: '3.5em', borderRadius: '9px', paddingLeft: '30px', paddingRight: '30px', fontFamily: 'Raleway', fontWeight: '500' }}>
              Découvrez notre histoire
            </button>
          </Container>
          <div className="img-feuille">
          </div>
        </div>
        <div className="container-fluid img3">
          <Container style={{ alignContent: 'center' }}>
            <h1 className={`${isScrolling2 ? "slide-right" : ''}`} style={{ textAlign: 'center', paddingTop: '2em', paddingBottom: '0.7em', fontFamily: 'Canela Deck Trial' }}>
              NOS ENGAGEMENTS
            </h1>
            <div className={`block ${isScrolling2 ? "slide-left" : ''}`} style={{ padding: '2em' }}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Turpis mauris id malesuada cursus. Aliquet iaculis eleifend at felis faucibus. Ut gravida facilisi in felis feugiat nisi viverra ut pulvinar. Facilisis aliquet lacus ultrices enim purus sem et amet. Gravida commodo ut massa dignissim diam a massa. Nisl aliquam fermentum nullam vulputate. Turpis viverra mi adipiscing ante tincidunt augue pharetra. Lobortis scelerisque scelerisque cras a vestibulum nulla sem. Rhoncus vitae euismod nec ut sapien tempor sit at. Suspendisse imperdiet sed ac mattis gravida urna. Arcu turpis pretium non vulputate vulputate fames diam. Enim urna pellentesque ultrices ac feugiat adipiscing pulvinar. Vitae proin erat semper elementum mi.
                Turpis interdum suspendisse mauris in tristique lacus nunc tellus ullamcorper. Nibh est fringilla facilisi eleifend enim aliquet vitae a sagittis. Interdum ac pharetra interdum mauris ac. Augue eu in.
              </p>
            </div>
            <h1 className={`${isScrolling2 ? "slide-right" : ''}`} style={{ textAlign: 'center', paddingTop: '2em', paddingBottom: '0.7em', fontFamily: 'Canela Deck Trial' }}>
              NOS VALEURS
            </h1>
            <div className={`${isScrolling2 ? "slide-left" : ''}`} style={{ padding: '2em' }}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Turpis mauris id malesuada cursus. Aliquet iaculis eleifend at felis faucibus. Ut gravida facilisi in felis feugiat nisi viverra ut pulvinar. Facilisis aliquet lacus ultrices enim purus sem et amet. Gravida commodo ut massa dignissim diam a massa. Nisl aliquam fermentum nullam vulputate. Turpis viverra mi adipiscing ante tincidunt augue pharetra. Lobortis scelerisque scelerisque cras a vestibulum nulla sem. Rhoncus vitae euismod nec ut sapien tempor sit at. Suspendisse imperdiet sed ac mattis gravida urna. Arcu turpis pretium non vulputate vulputate fames diam. Enim urna pellentesque ultrices ac feugiat adipiscing pulvinar. Vitae proin erat semper elementum mi.
                Turpis interdum suspendisse mauris in tristique lacus nunc tellus ullamcorper. Nibh est fringilla facilisi eleifend enim aliquet vitae a sagittis. Interdum ac pharetra interdum mauris ac. Augue eu in.
              </p>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
