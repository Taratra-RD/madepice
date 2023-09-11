import Header from "../components/Header";
import "./css/Contact.css";
import PhoneIcons from "../images/Icons.png";
import MailIcons from "../images/Icons(1).png";
import LocationIcons from "../images/Icons(2).png";
import FollowIcons from "../images/F-US.png";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import "../components/css/Accordion.css";
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  return (
    <>
      <div className="conatct">
        <div className="landing-page2">
          <div className="contact-header">
            <Header />
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
                  <h3>Appelez-nous</h3>
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
                  <h3>Adresse e-mail</h3>
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
                  <h3>Visitez-nous</h3>
                </div>
                <p>
                  <li>BP:238, 405 Boulevard Ratsimandrava</li>
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
                  <h3>Suivez-nous</h3>
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
              title="1. Vos épices sont-elles biologiques ?"
              content="MADÉPICES distribue des épices du terroir bien traitées, sans conservateur et sans additif. Nous savons d'où viennent nos produits et nous connaissons les paysans qui nous fournissent.Tout est impliqué dans la qualité finale. À vous d'en juger. Dégustez et vous verrez !"
            />
            <Accordion
              title="2. Quelle est la meilleure façon de conserver les épices ?"
              content="Pour une durée de conservation optimale, il est préférable de les garder dans un endroit frais, sec et à l'abri de la lumière directe du soleil et de l'air pour éviter les altérations de leur qualité. Nous vous recommandons en conséquence de les protéger dans des emballages assurés comme les pots hermétiques, les récipients en verre teinté..., pour préserver la fraîcheur et les arômes."
            />
            <Accordion
              title="3. Quelles sont les épices les plus utilisées ?"
              content="Les épices fréquemment utilisées varient en fonction de la cuisine du monde. Parmi les plus répandues ; les poivres, les baies, les voatsiperifery que l'on ne retrouve qu'à Madagascar, la cannelle, le cumin et le curcuma sont les plus demandés. Ils sont spécifiques et apportent un coup de peps aux plats."
            />
            <Accordion
              title="4. Quelle est la différence entre une épice et une feuille ?"
              content="La principale différence entre ces deux produits réside dans la partie de la plante utilisée. L'épice est généralement dérivée d'autres parties que les feuilles, comme l'écorce, les racines ou les graines. Les feuilles quant à elles proviennent des feuilles des plantes.

"
            />
            {/* <Accordion
                title="Lorem ipsum dolor sit amet?"
                content="Quisque rutrum. Aenean imperdi. 
                                Etiam ultricies nisi vel augue. 
                                Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                Etiam rhoncus. Maecenas tempus, tellus eget."
              /> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
