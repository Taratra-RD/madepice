import { useEffect, useState } from "react";
import "./css/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Caroussel from "../components/home/Caroussel";

// swiper
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import imgFont1 from "../images/Rectangle 11.png";
import imgBaieRose from "../images/imgBaieRose.png";
import imgFeuilleCombava from "../images/imgFeuilleCombava.png";
import imgBaobab from "../images/imgBaobab.png";
import Card from "../components/home/Card";
import { Container } from "react-bootstrap";
import { data } from "../data";
import { useParams } from "react-router-dom";

function Home() {
  const [slideCards, setSlideCards] = useState(false);
  const [scroll, whiteMode] = useState(0);
  const [hasPrevSlides, setHasPrevSlides] = useState(false);
  const [hasNextSlides, setHasNextSlides] = useState(false);

  const handleSlideChange = (swiper) => {
    setHasPrevSlides(swiper.activeIndex !== 0);
    setHasNextSlides(swiper.activeIndex !== 41);
  };

  const setWhiteMode = () => {
    whiteMode(window.scrollY);
  };

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setSlideCards(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", setWhiteMode);

    return () => {
      window.removeEventListener("scroll", setWhiteMode);
    };
  }, []);

  //scrolling animation
  const isScrolling0 = scroll > 103;
  const isScrolling = scroll > 600;
  const isScrollingFl = scroll > 800;
  const isScrolling2 = scroll > 1200;
  const isScrolling3 = scroll > 1700;

  return (
    <>
      <div className="home">
        <Header />
        <Caroussel />
        <div className="container-fluid img1">
          <div className="slider-container">
            <div
              className={`cards--home ${isScrolling0 ? "slide-upCrd" : ""} ${
                slideCards ? "slide" : ""
              }`}
            >
              <i
                className="custom-prev-button fa fas fa-circle-chevron-left fa-2xl"
                style={{
                  cursor: hasPrevSlides ? "pointer" : "default",
                  color: hasPrevSlides ? "#dc3545" : "rgba(242, 229, 209, 0.5)",
                  position: "fixed",
                  left: -37,
                  top: 185,
                }}
              ></i>
              
              <Swiper
                // install Swiper modules
                modules={[Navigation, Scrollbar, Autoplay]}
                spaceBetween={10}
                slidesPerView={4}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                speed={700}
                navigation={{
                  nextEl: ".custom-next-button",
                  prevEl: ".custom-prev-button",
                }}
                onSwiper={""}
                onSlideChange={handleSlideChange}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                  },
                  375: {
                    slidesPerView: 1.2,
                    spaceBetween: 2,
                  },
                  480: {
                    slidesPerView: 1.5,
                    spaceBetween: 2,
                  },

                  720: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  900: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1800:{
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                }}
              >
                {data.map((data) => (
                  <SwiperSlide key={data.id}>
                    <Card
                      key={data.id}
                      id={data.id}
                      img={data.imgUrl}
                      title={data.name}
                      text={data.description.slice(0, 90) + "..."}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <i
                className="custom-next-button fa fas fa-circle-chevron-right fa-2xl"
                style={{
                  cursor: hasNextSlides ? "pointer" : "pointer",
                  color: hasNextSlides ? "#dc3545" : "#dc3545",
                  position: "fixed",
                  right: -40,
                  top: 185,
                }}
              ></i>
            </div>
          </div>
        </div>
        <div className="container d-flex flex-direction-column align-items-center justify-content-center"></div>
        <div className="container-fluid img2">
          <Container>
            <h2
              className={`${isScrolling ? "slide-left" : ""}`}
              style={{
                marginTop: "0em",
                marginBottom: "0.5em",
                fontFamily: "Canela",
              }}
            >
              DES EPICES AUX GOUTS AUTHENTIQUES, RECOLTEES DIRECTEMENT CHEZ LES
              CULTIVATEURS
            </h2>
            <p
              className={`${isScrolling ? "slide-left" : ""}`}
              style={{ fontFamily: "Raleway" }}
            >
              Découvrez des trésors aromatiques authentiques, directement
              récoltés chez les cultivateurs. Chaque saveur incarne une relation
              de confiance entre la terre, les mains expertes et votre palais.
              Explorez un monde de délices transcendant les frontières.
            </p>
            
              <button
                className={`btn ${isScrolling ? "slide-left" : ""}`}
                style={{
                  background: "#f2e5d1",
                  marginTop: "1.2em",
                  color: "black",
                  height: "3.5em",
                  borderRadius: "9px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  fontFamily: "Raleway",
                  fontWeight: 600,
                }}
              >
                Découvrez notre histoire
              </button>
            
          </Container>
          <div
            className={`img-feuille ${
              isScrollingFl && isScrolling ? "slide-feuille-1" : ""
            }`}
          ></div>
          <div className={`img-feuille2 ${isScrolling ? "" : ""}`}></div>
        </div>
        <div className="container-fluid img3">
          <Container style={{ alignContent: "center" }}>
            <h1
              className={`${isScrolling2 ? "slide-right" : ""}`}
              style={{
                textAlign: "center",
                paddingBottom: "0.7em",
                color: "#F2E5D1",
                fontFamily: "Canela",
              }}
            >
              NOS ENGAGEMENTS
            </h1>
            <div
              className={`block ${isScrolling2 ? "slide-left" : ""}`}
              style={{ padding: "1em" }}
            >
              <p>
                Chez Madepices, notre engagement réside dans l'élaboration
                minutieuse d'un travail de qualité, centré sur des produits
                d'exception. Notre démarche s'étend de la collecte initiale
                jusqu'au conditionnement final, garantissant une excellence
                constante à chaque étape du processus. Nous mettons un point
                d'honneur à sélectionner avec soin les matières premières les
                plus raffinées, en parcourant les coins les plus reculés pour
                trouver des trésors aromatiques uniques. Guidés par notre
                passion, nous préservons la pureté et l'authenticité de chaque
                produit, tout en accordant une attention méticuleuse au
                conditionnement pour préserver leur fraîcheur et leur caractère
                unique. Notre dévouement à l'excellence nous pousse à offrir des
                expériences gustatives exceptionnelles, enrichies par des
                saveurs profondes et des arômes captivants, reflétant l'essence
                même de Madagascar.
              </p>
            </div>
            <h1
              className={`${isScrolling3 ? "slide-right d-block" : ""}`}
              style={{
                textAlign: "center",
                paddingBottom: "0.7em",
                color: "#F2E5D1",
                fontFamily: "Canela",
              }}
            >
              NOS VALEURS
            </h1>
            <div
              className={` block ${isScrolling3 ? "slide-left d-block" : ""}`}
              style={{ padding: "1em" }}
            >
              <p>
                Plongés au cœur de Madagascar, nous nous engageons passionnément
                à sélectionner et façonner les épices les plus raffinées.
                L'excellence est notre boussole, nous conduisant à explorer les
                recoins de cette île aux richesses inestimables, en quête
                d'arômes uniques. Chaque épice, fruit d'une culture minutieuse,
                marie terroir et artisanat ancestral. Notre processus, de la
                récolte à la préparation, vise à capturer l'essence même de
                Madagascar. Ces arômes profonds et ces saveurs authentiques,
                résultant d'un travail méticuleux, éveilleront vos sens et
                rehausseront vos créations culinaires. Rejoignez-nous dans cette
                aventure gastronomique où chaque épice narre une histoire de
                passion, de qualité et de tradition, reliant ainsi passé et
                présent.
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
