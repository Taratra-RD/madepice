import Header from "../components/Header";
import "./css/Contact.css";
import PhoneIcons from "../image/autres/icons/Icons.png";
import MailIcons from "../image/autres/icons/Icons(1).png";
import LocationIcons from "../image/autres/icons/Icons(2).png";
import FollowIcons from "../image/autres/icons/F-US.png";
import Accordion from "../components/Accordion";
import "../components/css/Accordion.css";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Update the window width when the component mounts and on window resize.
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine whether to swap the items based on the window width.
  const shouldSwapItems = windowWidth > 504; // Adjust the condition as needed
  const { t } = useTranslation();
  return (
    <>
      <div className="contact">
        <Header />
        <div className="landing-page2">
          <div className="degradee">
            <div className="contact-header"></div>
            <div className="title-1">CONTACT & FAQ</div>
          </div>
        </div>
        <div className="body--contain">
          <div className="contact--list">
            <div className="list">
              <div className="icons">
                {" "}
                <img className="icons--img" src={PhoneIcons} alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <h3>{t("contact.1")}</h3>
                </div>
                <p>
                  <li>+261 34 34 134 81</li>
                  <li>+261 34 34 134 81</li>
                </p>
              </div>
            </div>
            <div className="red--line"></div>
            <div className="list">
              <div className="icons">
                <img className="icons--img" src={MailIcons} alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <h3>{t("contact.2")}</h3>
                </div>
                {shouldSwapItems ? (
                  <>
                    <p>
                      <li>commercial@madepices.mg</li>
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <li>commercial @madepices .mg</li>
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="red--line"></div>
            <div className="list">
              <div className="icons">
                <img className="icons--img" src={LocationIcons} alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <h3>{t("contact.3")}</h3>
                </div>
                <p>
                  <li>Ivato Aeroport , Antananarivo</li>
                </p>
              </div>
            </div>
            <div className="red--line"></div>
            <div className="list">
              <div className="icons">
                <img className="icons--img" src={FollowIcons} alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <h3>{t("contact.4")}</h3>
                </div>
                <p>
                  <li>Madépices</li>
                </p>
              </div>
            </div>
          </div>
          <div className="faq--title">
            <h1 className="title--2">FAQ</h1>
          </div>
          <div className="accordion--list">
            <Accordion
              title={t("contact-faq.1")}
              content={t("contact-faq.2")}
            />
            <Accordion
              title={t("contact-faq.3")}
              content={t("contact-faq.4")}
            />
            <Accordion
              title={t("contact-faq.5")}
              content={t("contact-faq.6")}
            />
            <Accordion
              title={t("contact-faq.7")}
              content={t("contact-faq.8")}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
