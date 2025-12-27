import Footer from "../components/Footer";
import HeaderAbout from "../components/Header";
import "./css/About.css";
import leaves from "../image/autres/Leaves/Leaves 1 (1).webp";
import leaves_1 from "../image/autres/Leaves/Leaves 2 (1).webp";
import { useState, useEffect } from "react";
import "../components/css/Header.css";
import i18n from "../i18next";
import { I18nextProvider, useTranslation } from "react-i18next";

const About = () => {
  const [scroll_1, translation_1] = useState(0);
  const [scroll_2, translation_2] = useState(0);
  const [scroll_3, translation_3] = useState(0);
  const [scroll_4, lineAnimation] = useState(0);

  const setTranslation_1 = () => {
    translation_1(window.scrollY);
  };

  const setTranslation_2 = () => {
    translation_2(window.scrollY);
  };

  const setTranslation_3 = () => {
    translation_3(window.scrollY);
  };

  const setLineAnimation = () => {
    lineAnimation(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", setTranslation_1);

    return () => {
      window.removeEventListener("scroll", setTranslation_1);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", setTranslation_2);

    return () => {
      window.removeEventListener("scroll", setTranslation_2);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", setTranslation_3);

    return () => {
      window.removeEventListener("scroll", setTranslation_3);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", setLineAnimation);

    return () => {
      window.removeEventListener("scroll", setLineAnimation);
    };
  }, []);

  const isScrolling_1 = scroll_1 > 200;
  const isScrolling_2 = scroll_2 > 500;
  const isScrolling_3 = scroll_3 > 800;
  const isScrolling_4 = scroll_4 > 100;

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <div className="about">
          <HeaderAbout />
          <div className="imgGroups2">
            <div className="about--header"></div>
            <div className="title-1">{t("about.1")}</div>
            <div></div>
          </div>
          <div className="contain">
            <div className="history">
              <div
                className={`history-content ${
                  isScrolling_1 ? "slide-left-1" : ""
                } `}
              >
                <div className="content--about">
                  <h4>2011</h4>
                  <p>{t("about.2")}</p>
                  <div
                    className={`line ${isScrolling_4 ? "line-anim" : ""} `}
                  ></div>
                </div>
              </div>
              <div
                className={`history-content ${
                  isScrolling_2 ? "slide-left-2" : ""
                } `}
              >
                <div className="content--about">
                  <p>{t("about.3")}</p>
                  <div
                    className={`line ${isScrolling_4 ? "line-anim" : ""} `}
                  ></div>
                </div>
              </div>
              <div
                className={`history-content ${
                  isScrolling_3 ? "slide-left-3" : ""
                } `}
              >
                <div className="content--about">
                  <p>{t("about.4")}</p>
                  <div
                    className={`line ${isScrolling_4 ? "line-anim" : ""} `}
                  ></div>
                </div>
              </div>
            </div>
            <div className="title-2">
              <h1>{t("home.4")}</h1>
            </div>
            <div className="container container--about">
              <p className="title-2-content">{t("home.5")}</p>
            </div>
            <div className="title-2">
              <h1>{t("home.6")}</h1>
            </div>
            <div className="container container--about">
              <p className="title-2-content">{t("home.7")}</p>
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
          <img className="leaves" src={leaves} alt="" />
          <img className="leaves-1" src={leaves_1} alt="" />
        </div>
      </I18nextProvider>
    </>
  );
};

export default About;
