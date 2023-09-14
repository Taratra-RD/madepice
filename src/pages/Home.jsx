import { useEffect, useState } from "react";
import "./css/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Caroussel from "../components/home/Caroussel";

// swiper
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "../components/home/Card";
import { Container } from "react-bootstrap";
import { data } from "../data";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18next";

function Home() {
  const [slideCards, setSlideCards] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [hasPrevSlides, setHasPrevSlides] = useState(false);
  const [hasNextSlides, setHasNextSlides] = useState(false);

  const navigate = useNavigate();

  const handleSlideChange = (swiper) => {
    setHasPrevSlides(swiper.activeIndex !== 0);
    setHasNextSlides(swiper.activeIndex !== 41);
  };

  const setWhiteMode = () => {
    setScroll(window.scrollY);
  };

  //scrolling animation
  const isScrolling0 = scroll > 103;
  const isScrolling = scroll > 600;
  const isScrollingFl = scroll > 800;
  const isScrolling2 = scroll > 1200;
  const isScrolling3 = scroll > 1700;

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

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t, i18n } = useTranslation();

  const handleClick = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="home">
        <Header handleClick={handleClick} />
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
                  1800: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                }}
              >
                {data.map((data) => (
                  <SwiperSlide key={data.id}>
                    {/* <Card
                      key={data.id}
                      id={data.id}
                      img={data.imgUrl}
                      title={data.name}
                      className={"home"}
                      text={data.description.slice(0, 45) + "..."}
                    /> */}
                    <Card
                      key={data.id}
                      id={data.id}
                      img={data.imgUrl}
                      img1={data.imgUrl_1}
                      title={data.name}
                      className={"home"}
                      product={data}
                      text={data.description.slice(0, 45) + "..."}
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
                fontFamily: "Canela Deck Trial",
              }}
            >
              {t("home.1")}
            </h2>
            <p
              className={`${isScrolling ? "slide-left" : ""}`}
              style={{ fontFamily: "Raleway" }}
            >
              {t("home.2")}
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
              onClick={() => navigate("/about")}
            >
              {t("home.3")}
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
                fontFamily: "Canela Deck Trial",
              }}
            >
              {t("home.4")}
            </h1>
            <div
              className={`block ${isScrolling2 ? "slide-left" : ""}`}
              style={{ padding: "1em" }}
            >
              <p>{t("home.5")}</p>
            </div>
            <h1
              className={`${isScrolling3 ? "slide-right d-block" : ""}`}
              style={{
                textAlign: "center",
                paddingBottom: "0.7em",
                color: "#F2E5D1",
                fontFamily: "Canela Deck Trial",
              }}
            >
              {t("home.6")}
            </h1>
            <div
              className={` block ${isScrolling3 ? "slide-left d-block" : ""}`}
              style={{ padding: "1em" }}
            >
              <p>{t("home.7")}</p>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
