import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./css/SingleProduct.css";
import { data } from "../data";
import Card from "../components/home/Card";
import { useMediaQuery } from "usehooks-ts";
import { useTranslation } from "react-i18next";

export default function SingleProduct() {
  const { id } = useParams(); // Extract the 'id' parameter from the URL
  const widthPhoneLg = useMediaQuery("(max-width:720px)");
  const display = useMediaQuery("(max-width:700px)");
  const [currentImage, setCurrentImage] = useState("");
  const [currentImageId, setCurrentImageId] = useState("");

  // Shuffle function to randomly reorder the array
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }
  const shuffledData = shuffleArray(data);
  // eslint-disable-next-line
  const filteredProduct = data.filter((product) => product.id == id);

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (value) => {
    setCurrentImage(value);
  };

  const handleOver = (id) => {
    setCurrentImageId(id);
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="header--product">
        <Header />
      </div>
      <div className="one--product--display">
        {filteredProduct.map((product) => (
          <div className="single--product" key={product.id}>
            {product.produits.map((produit) => (
              <div className="single--product--container" key={produit.id}>
                <div
                  onClick={() => handleOver(produit.id)}
                  id={produit.id}
                  className="single--product--left"
                  style={
                    currentImage !== "" && currentImageId === produit.id
                      ? { backgroundImage: `url('${currentImage}')` }
                      : { backgroundImage: `url('${produit.imgUrl}')` }
                  }
                >
                  <div className="gallery">
                    <div className="gallery-container">
                      {produit.gallery.map((value, index) => (
                        <div
                          onClick={() => handleClick(value)}
                          key={index}
                          className="photo"
                          style={{
                            backgroundImage: `url('${value}')`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="line-red"></div>
                <div className="single--product--right" key={produit.id}>
                  <h2 style={{ fontFamily: "Canela", color: "#F2E5D1" }}>
                    {t(`product-${product.id}-${produit.id}.name`)}
                  </h2>
                  <p
                    style={
                      produit.gout === ""
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    <span style={{ fontWeight: 600 }}>{t(`text.1`)} :</span>
                    {t(`product-${product.id}-${produit.id}.gout`)}
                  </p>
                  <p
                    style={
                      produit.intensite === "" || display
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    <span style={{ fontWeight: 600 }}>{t(`text.2`)} : </span>
                    {t(`product-${product.id}-${produit.id}.intensite`)}
                  </p>
                  <p
                    style={
                      produit.parfum === ""
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    <span style={{ fontWeight: 600 }}>{t(`text.3`)} : </span>
                    {t(`product-${product.id}-${produit.id}.parfum`)}
                  </p>
                  <p
                    style={
                      produit.texture === ""
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    <span style={{ fontWeight: 600 }}>{t(`text.4`)} : </span>
                    {t(`product-${product.id}-${produit.id}.texture`)}
                  </p>
                  <p
                    style={
                      produit.conservation === "" || display
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    <span style={{ fontWeight: 600 }}>Conservation : </span>
                    {t(`product-${product.id}-${produit.id}.conservation`)}
                  </p>
                  <p
                    style={
                      produit.composition === "" || display
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    <span style={{ fontWeight: 600 }}>Composition : </span>
                    {t(`product-${product.id}-${produit.id}.composition`)}
                  </p>
                  <p
                    style={
                      produit.conditionnement === [] || display
                        ? { display: "none" }
                        : { display: "flex", flexWrap: "wrap" }
                    }
                    className="single--product--conditionnement"
                  >
                    <span style={{ fontWeight: 600 }}>
                      Conditionnement : &nbsp;
                    </span>{" "}
                    {produit.conditionnement.map((value, index) => (
                      <span
                        key={index}
                        style={
                          value.grammage
                            ? { display: "block" }
                            : { display: "none" }
                        }
                      >
                        {value.grammage} |&nbsp;
                      </span>
                    ))}{" "}
                    en vrac (1kg-5kg)
                  </p>
                  <p
                    style={
                      produit.description === ""
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    <span style={{ fontWeight: 600 }}>{t(`text.5`)} : </span>{" "}
                    {t(`product-${product.id}-${produit.id}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
        {widthPhoneLg ? (
          <div className="random--product--container">
            {shuffledData.slice(0, 4).map((product) => (
              <div className="products--products--list--card" key={product.id}>
                <Card className={"details"} product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="random--product--container">
            {shuffledData.slice(0, 12).map((product) => (
              <div className="products--products--list--card" key={product.id}>
                <Card className={"details"} product={product} />
              </div>
            ))}
          </div>
        )}
        <div className="button--product">
          <Link to={"/product"}>
            <button
              className="btn btn-lg"
              style={{
                borderRadius: "8px",
                fontFamily: "Raleway",
                fontWeight: 700,
              }}
            >
              {t("singleproduct.1")}
            </button>
          </Link>
        </div>
      </div>

      <div className="footer--product">
        <Footer />
      </div>
    </>
  );
}
