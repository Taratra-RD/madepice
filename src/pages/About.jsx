import Footer from "../components/Footer";
import HeaderAbout from "../components/Header";
import "./css/About.css";
import leaves from "../images/Leaves 1.png";
import leaves_1 from "../images/Leaves 2.png";
import { useState, useEffect } from "react";
import "../components/css/Header.css";

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

  return (
    <>
      <div className="about">
        <div className="imgGroups2">
          <div className="about--header">
            <HeaderAbout />
          </div>
          <div className="title-1">QUI SOMMES-NOUS?</div>
        </div>
        <div className="contain">
          <div className="history">
            <div
              className={`history-content ${
                isScrolling_1 ? "slide-left-1" : ""
              } `}
            >
              <div className="content">
                <h4>2011</h4>
                <p>
                  MADEPICES, une société créée en 2011  spécialisée dans la
                  préparation d’épices et dans la commercialisation des produits
                  agroalimentaires et cosmétiques à base d’épices. Nous nous
                  concentrons essentiellement sur l’aspect artisanal. Nous
                  proposons des produits de haute qualité : triés, préparés et
                  calibrés à la main par une équipe avec 20 ans d’expérience
                  dans le domaine. Nous garantissons une variété d’épices haut
                  de gamme, sélectionnée, naturelles et saisonnières répondant à
                  vos attentes.
                </p>
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
              <div className="content">
                <p>
                  Eco-responsable, nous sélectionnons dans les plus belles
                  plantations de Madagascar, environ 20 matières premières
                  saisonnières provenant de différentes régions de Madagascar.
                  Les matières sont transformées  dans notre manufacture à
                  Antananarivo et commercialisées  auprès des gourmets et
                  gastronomes du monde entier. Madépices pousse sa créativité
                  jusqu'à un packaging personnalisé et unique  en ajoutant des
                  bouchons ou des coffrets en palissandre travaillés dans notre
                  atelier bois.
                </p>
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
              <div className="content">
                <p>
                  Plongez dans notre vaste sélection de produits du terroir,
                  reconnus comme les "Meilleures épices de Madagascar". Une
                  expérience sensorielle vous attend, comblant vos papilles de
                  saveurs raffinées. Madépices, porteur d'une passion pour les
                  goûts exquis, vous convie à explorer cet héritage aromatique.
                  Laissez-vous séduire par des arômes authentiques et des
                  sensations inoubliables, et découvrez une nouvelle dimension
                  de la passion pour les saveurs.
                </p>
                <div
                  className={`line ${isScrolling_4 ? "line-anim" : ""} `}
                ></div>
              </div>
            </div>
          </div>
          <div className="title-2">
            <h1>NOS ENGAGEMENTS</h1>
          </div>
          <div className="container container--about">
            <p className="title-2-content">
              Chez Madepices, notre engagement réside dans l'élaboration
              minutieuse d'un travail de qualité, centré sur des produits
              d'exception. Notre démarche s'étend de la collecte initiale
              jusqu'au conditionnement final, garantissant une excellence
              constante à chaque étape du processus. Nous mettons un point
              d'honneur à sélectionner avec soin les matières premières les plus
              raffinées, en parcourant les coins les plus reculés pour trouver
              des trésors aromatiques uniques. Guidés par notre passion, nous
              préservons la pureté et l'authenticité de chaque produit, tout en
              accordant une attention méticuleuse au conditionnement pour
              préserver leur fraîcheur et leur caractère unique. Notre
              dévouement à l'excellence nous pousse à offrir des expériences
              gustatives exceptionnelles, enrichies par des saveurs profondes et
              des arômes captivants, reflétant l'essence même de Madagascar.
            </p>
          </div>
          <div className="title-2">
            <h1>NOS VALEURS</h1>
          </div>
          <div className="container container--about">
            <p className="title-2-content">
              Plongés au cœur de Madagascar, nous nous engageons passionnément à
              sélectionner et façonner les épices les plus raffinées.
              L'excellence est notre boussole, nous conduisant à explorer les
              recoins de cette île aux richesses inestimables, en quête d'arômes
              uniques. Chaque épice, fruit d'une culture minutieuse, marie
              terroir et artisanat ancestral. Notre processus, de la récolte à
              la préparation, vise à capturer l'essence même de Madagascar. Ces
              arômes profonds et ces saveurs authentiques, résultant d'un
              travail méticuleux, éveilleront vos sens et rehausseront vos
              créations culinaires. Rejoignez-nous dans cette aventure
              gastronomique où chaque épice narre une histoire de passion, de
              qualité et de tradition, reliant ainsi passé et présent.
            </p>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
        <img className="leaves" src={leaves} alt="" />
        <img className="leaves-1" src={leaves_1} alt="" />
      </div>
      <div className="contain">
        <div className="history">
          <div
            className={`history-content ${
              isScrolling_1 ? "slide-left-1" : ""
            } `}
          >
            <div className="content">
              <h4>2011</h4>
              <p>
                MADEPICES, une société créée en 2011  spécialisée dans la
                préparation d’épices et dans la commercialisation des produits
                agroalimentaires et cosmétiques à base d’épices. Nous nous
                concentrons essentiellement sur l’aspect artisanal. Nous
                proposons des produits de haute qualité : triés, préparés et
                calibrés à la main par une équipe avec 20 ans d’expérience dans
                le domaine. Nous garantissons une variété d’épices haut de
                gamme, sélectionnée, naturelles et saisonnières répondant à vos
                attentes.
              </p>
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
            <div className="content">
              <p>
                Eco-responsable, nous sélectionnons dans les plus belles
                plantations de Madagascar, environ 20 matières premières
                saisonnières provenant de différentes régions de Madagascar. Les
                matières sont transformées  dans notre manufacture à
                Antananarivo et commercialisées  auprès des gourmets et
                gastronomes du monde entier. Madépices pousse sa créativité
                jusqu'à un packaging personnalisé et unique  en ajoutant des
                bouchons ou des coffrets en palissandre travaillés dans notre
                atelier bois.
              </p>
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
            <div className="content">
              <p>
                Plongez dans notre vaste sélection de produits du terroir,
                reconnus comme les "Meilleures épices de Madagascar". Une
                expérience sensorielle vous attend, comblant vos papilles de
                saveurs raffinées. Madépices, porteur d'une passion pour les
                goûts exquis, vous convie à explorer cet héritage aromatique.
                Laissez-vous séduire par des arômes authentiques et des
                sensations inoubliables, et découvrez une nouvelle dimension de
                la passion pour les saveurs.
              </p>
              <div
                className={`line ${isScrolling_4 ? "line-anim" : ""} `}
              ></div>
            </div>
          </div>
        </div>
        <div className="title-2">
          <h1>NOS ENGAGEMENTS</h1>
        </div>
        <div className="container container--about">
          <p className="title-2-content">
            Chez Madepices, notre engagement réside dans l'élaboration
            minutieuse d'un travail de qualité, centré sur des produits
            d'exception. Notre démarche s'étend de la collecte initiale jusqu'au
            conditionnement final, garantissant une excellence constante à
            chaque étape du processus. Nous mettons un point d'honneur à
            sélectionner avec soin les matières premières les plus raffinées, en
            parcourant les coins les plus reculés pour trouver des trésors
            aromatiques uniques. Guidés par notre passion, nous préservons la
            pureté et l'authenticité de chaque produit, tout en accordant une
            attention méticuleuse au conditionnement pour préserver leur
            fraîcheur et leur caractère unique. Notre dévouement à l'excellence
            nous pousse à offrir des expériences gustatives exceptionnelles,
            enrichies par des saveurs profondes et des arômes captivants,
            reflétant l'essence même de Madagascar.
          </p>
        </div>
        <div className="title-2">
          <h1>NOS VALEURS</h1>
        </div>
        <div className="container container--about">
          <p className="title-2-content">
            Plongés au cœur de Madagascar, nous nous engageons passionnément à
            sélectionner et façonner les épices les plus raffinées. L'excellence
            est notre boussole, nous conduisant à explorer les recoins de cette
            île aux richesses inestimables, en quête d'arômes uniques. Chaque
            épice, fruit d'une culture minutieuse, marie terroir et artisanat
            ancestral. Notre processus, de la récolte à la préparation, vise à
            capturer l'essence même de Madagascar. Ces arômes profonds et ces
            saveurs authentiques, résultant d'un travail méticuleux, éveilleront
            vos sens et rehausseront vos créations culinaires. Rejoignez-nous
            dans cette aventure gastronomique où chaque épice narre une histoire
            de passion, de qualité et de tradition, reliant ainsi passé et
            présent.
          </p>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
      <img className="leaves" src={leaves} alt="" />
      <img className="leaves-1" src={leaves_1} alt="" />
    </>
  );
};

export default About;
