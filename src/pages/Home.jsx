
import { useEffect, useState } from "react";
import "./css/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Caroussel from "../components/home/Caroussel";

// swiper 
import { Navigation, Pagination, Scrollbar, Autoplay , A11y } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import imgFont1 from "../images/Rectangle 11.png";
import imgFont2 from "../images/Rectangle 11a.png";
import imgBaieRose from "../images/BaieRose.png";
import imgFeuilleCombava from "../images/imgFeuilleCombava.png"
import imgBaobab from "../images/imgBaobab.png"

import Card from "../components/home/Card";
import { Col, Container, Row } from "react-bootstrap";
import { data } from '../data'

function Home() {
  const [slideCards, setSlideCards] = useState(false);
  const [scroll, whiteMode] = useState(0)
  const [hasPrevSlides, setHasPrevSlides] = useState(false);
  const [hasNextSlides, setHasNextSlides] = useState(false);

  const handleSlideChange = (swiper) => {
    setHasPrevSlides(swiper.activeIndex !== 0);
    setHasNextSlides(swiper.activeIndex !== 42);
  };
  
  const setWhiteMode = () => {
    whiteMode(window.scrollY)
  }

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setSlideCards(true);
    }
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', setWhiteMode)

    return () => {
      window.removeEventListener('scroll', setWhiteMode)
    }

  }, [])
  
  //scrolling animation
  const isScrolling0 = scroll > 103
  const isScrolling = scroll > 600
  const isScrolling2 = scroll > 1200
  const isScrolling3 = scroll > 1700

  const cardData = [
    { img: imgFont1, title: "OLI" },
    { img: imgFont1, title: "OLI2" },
    { img: imgFont1, title: "PRODUCT 1" },
    { img: imgFont1, title: "PRODUCT 2" },
    { img: imgFont1, title: "PRODUCT 3" },
    { img: imgFont1, title: "PRODUCT 4" }
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
          <div className="slider-container">
            <div className={`cards--home ${isScrolling0 ? "slide-upCrd" : ""} ${slideCards ? "slide" : ""}`}>
              <i 
                className="custom-prev-button fa fas fa-circle-chevron-left fa-2xl" 
                style={{
                  cursor: hasPrevSlides ? 'pointer' : 'default',
                  color: hasPrevSlides ? '#dc3545' : 'rgba(242, 229, 209, 0.5)',
                }}
              >
              </i>
              <Swiper
                // install Swiper modules
                modules={[Navigation,Scrollbar,Autoplay]}
                spaceBetween={10}
                slidesPerView={4}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                speed={700}
                navigation={{
                  nextEl: '.custom-next-button',
                  prevEl: '.custom-prev-button',
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={handleSlideChange}
          
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 5
                  },
                  375: {
                    slidesPerView: 1.2,
                    spaceBetween: 2
                  }
                  ,
                  480: {
                    slidesPerView: 1.5,
                    spaceBetween: 2,
                    
                  },
                  
                  720: {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  900: {
                    slidesPerView: 2.5,
                    spaceBetween: 10
                  }
                  ,
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 10
                  }
                }}
              >
                {
                  data.map(data => (
                    <SwiperSlide>
                      <Card
                        key={data.name}
                        img={imgBaieRose}
                        title={data.name}
                        text={data.Description.slice(0,100)+'...'}
                      />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              <i className="custom-next-button fa fas fa-circle-chevron-right fa-2xl"
               style={{
                cursor: hasNextSlides ? 'pointer' : 'default',
                color: hasNextSlides ? '#dc3545' : 'rgba(242, 229, 209, 0.5)',
              }}>
              </i>
            </div>
          </div>
        </div>
        <div className="container d-flex flex-direction-column align-items-center justify-content-center">

        </div>
        <div className="container-fluid img2">
          <Container>
            <h2 className={`${isScrolling ? "slide-left" : ''}`} style={{ marginTop: '0em', marginBottom: '0.5em', fontFamily: 'Canela Deck Trial' }}>
              DES EPICES AUX GOUTS AUTHENTIQUES, RECOLTEES DIRECTEMENT CHEZ LES CULTIVATEURS
            </h2>
            <p className={`${isScrolling ? "slide-left" : ''}`} style={{ fontFamily: 'Raleway' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum animi unde itaque aut accusamus, repellat quae, tempore neque amet quaerat. Ipsam quibusdam sapiente vitae!
            </p>
            <button className={`btn ${isScrolling ? "slide-left" : ''}`} style={{ background: '#f2e5d1', marginTop: '1.2em', color: 'black', height: '3.5em', borderRadius: '9px', paddingLeft: '30px', paddingRight: '30px', fontFamily: 'Raleway', fontWeight: 600 }}>
              Découvrez notre histoire
            </button>
          </Container>
          <div className="img-feuille">
          </div>
        </div>
        <div className="container-fluid img3">
          <Container style={{ alignContent: 'center' }}>
            <h1 className={`${isScrolling2 ? "slide-right" : ''}`} style={{ textAlign: 'center', paddingBottom: '0.7em', color: '#F2E5D1', fontFamily: 'Canela Deck Trial' }}>
              NOS ENGAGEMENTS
            </h1>
            <div className={`block ${isScrolling2 ? "slide-left" : ''}`} style={{ padding: '1em' }}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Turpis mauris id malesuada cursus. Aliquet iaculis eleifend at felis faucibus. Ut gravida facilisi in felis feugiat nisi viverra ut pulvinar. Facilisis aliquet lacus ultrices enim purus sem et amet. Gravida commodo ut massa dignissim diam a massa. Nisl aliquam fermentum nullam vulputate. Turpis viverra mi adipiscing ante tincidunt augue pharetra. Lobortis scelerisque scelerisque cras a vestibulum nulla sem. Rhoncus vitae euismod nec ut sapien tempor sit at. Suspendisse imperdiet sed ac mattis gravida urna. Arcu turpis pretium non vulputate vulputate fames diam. Enim urna pellentesque ultrices ac feugiat adipiscing pulvinar. Vitae proin erat semper elementum mi.
                Turpis interdum suspendisse mauris in tristique lacus nunc tellus ullamcorper. Nibh est fringilla facilisi eleifend enim aliquet vitae a sagittis. Interdum ac pharetra interdum mauris ac. Augue eu in.
              </p>
            </div>
            <h1 className={`${isScrolling3 ? "slide-right d-block" : ''}`} style={{ textAlign: 'center', paddingBottom: '0.7em', color: '#F2E5D1', fontFamily: 'Canela Deck Trial' }}>
              NOS VALEURS
            </h1>
            <div className={` block ${isScrolling3 ? "slide-left d-block" : ''}`} style={{ padding: '1em' }}>
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