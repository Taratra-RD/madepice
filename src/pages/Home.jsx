
import { useEffect, useState } from "react";
import "./css/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Caroussel from "../components/home/Caroussel";
// swiper 
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import imgFont1 from "../images/Rectangle 11.png";

import Card from "../components/home/Card";
import { Col, Container, Row } from "react-bootstrap";

function Home() {

  const [scroll, whiteMode] = useState(0)

  const setWhiteMode = () => {
    whiteMode(window.scrollY)
  }
  const [slideCards, setSlideCards] = useState(false);

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

  const isScrolling = scroll > 600
  const isScrolling2 = scroll > 1200
  const isScrolling3 = scroll > 1800

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
            <div className={`cards ${slideCards ? "slide" : ""}`}>
              <i className="custom-prev-button fa fas fa-circle-chevron-left fa-2xl" style={{ cursor: 'pointer', color: '#f2e5d1' }}></i>
              <Swiper
                // install Swiper modules
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={4}
                navigation={{
                  nextEl: '.custom-next-button',
                  prevEl: '.custom-prev-button',

                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10
                  },
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  900: {
                    slidesPerView: 3,
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
                <SwiperSlide>
                  <Card
                    key={0}
                    img={imgFont1}
                    title={"h h1"}
                    className={'spacing'}
                    text={'Lorem ipsum dolor sit amet consectetur. Mi sodales quam ornare lacus ornare feugiat fezr ze...'}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    key={1}
                    img={imgFont1}
                    title={"h h2"}
                    className={'spacing'}
                    text={'Lorem ipsum dolor sit amet consectetur. Mi sodales quam ornare lacus ornare feugiat fezr ze...'}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    key={2}
                    img={imgFont1}
                    title={"h h3"}
                    className={'spacing'}
                    text={'Lorem ipsum dolor sit amet consectetur. Mi sodales quam ornare lacus ornare feugiat fezr ze...'}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    key={3}
                    img={imgFont1}
                    title={"h h4"}
                    className={'spacing'}
                    text={'Lorem ipsum dolor sit amet consectetur. Mi sodales quam ornare lacus ornare feugiat fezr ze...'}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    key={4}
                    img={imgFont1}
                    title={"h h5"}
                    className={'spacing'}
                    text={'Lorem ipsum dolor sit amet consectetur. Mi sodales quam ornare lacus ornare feugiat fezr ze...'}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    key={5}
                    img={imgFont1}
                    title={"h h6"}
                    className={'spacing'}
                    text={'Lorem ipsum dolor sit amet consectetur. Mi sodales quam ornare lacus ornare feugiat fezr ze...'}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    key={5}
                    img={imgFont1}
                    title={"h h7"}
                    className={'spacing'}
                    text={'Lorem ipsum dolor sit amet consectetur. Mi sodales quam ornare lacus ornare feugiat fezr ze...'}
                  />
                </SwiperSlide>
              </Swiper>


              <i className="custom-next-button fa fas fa-circle-chevron-right fa-2xl" style={{ cursor: 'pointer', color: '#f2e5d1' }}></i>


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