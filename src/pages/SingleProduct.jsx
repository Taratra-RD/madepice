import React, { useEffect } from "react";
import { useState } from "react";
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
  const [currentImage] = useState(0);

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

  const { t } = useTranslation();

  return (
    <>
      <div className="header--product">
        <Header />
      </div>
      {filteredProduct.map((product) => (
        <>
          <div className="single--product" key={product.id}>
            {product.produits.map((produit) => (
              <div className="single--product--container" key={produit.id}>
                <div
                  className="single--product--left"
                  id="single--product--left"
                  key={filteredProduct[0].produits[currentImage].id}
                  style={{ backgroundImage: `url('${produit.imgUrl}')` }}
                >
                  <div className="gallery-photo">
                    {produit.gallery.map((image) => (
                      <div
                        className="image-gallery"
                        key={image}
                        style={{ backgroundImage: `${image}` }}
                      ></div>
                    ))}
                  </div>
                  {/* next prev ra ilaina
                    <i className="fas fa-chevron-left" style={{positon:'relative',marginRight:'9em'}}></i>
                    <i className="fas fa-chevron-right" style={{positon:'relative',right:0}}></i>
                  */}
                </div>
                <div className="line-red"></div>
                <div className="single--product--right" key={produit.id}>
                  <h2 style={{ fontFamily: "Canela", color: "#F2E5D1" }}>
                    {t(`product-${product.id}-${produit.id}.name`)}
                  </h2>
                  <br />
                  <p
                    style={
                      produit.gout === ""
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    <span style={{ fontWeight: 600 }}>Goût : </span>
                    {t(`product-${product.id}-${produit.id}.gout`)}
                  </p>
                  <p
                    style={
                      produit.intensite === ""
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    <span style={{ fontWeight: 600 }}>Intensité : </span>
                    {t(`product-${product.id}-${produit.id}.intensite`)}
                  </p>
                  <p
                    style={
                      produit.parfum === ""
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    <span style={{ fontWeight: 600 }}>Parfum : </span>
                    {t(`product-${product.id}-${produit.id}.parfum`)}
                  </p>
                  <p
                    style={
                      produit.texture === ""
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    <span style={{ fontWeight: 600 }}>Texture : </span>
                    {t(`product-${product.id}-${produit.id}.texture`)}
                  </p>
                  <p
                    style={
                      produit.conservation === ""
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    <span style={{ fontWeight: 600 }}>Conservation : </span>
                    {t(`product-${product.id}-${produit.id}.conservation`)}
                  </p>
                  <p
                    style={
                      produit.composition === ""
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    <span style={{ fontWeight: 600 }}>Composition : </span>
                    {t(`product-${product.id}-${produit.id}.composition`)}
                  </p>
                  <p
                    style={
                      produit.conditionnement === []
                        ? { display: "none" }
                        : { display: "flex" }
                    }
                  >
                    <span style={{ fontWeight: 600 }}>Conditionnement : </span>{" "}
                    {produit.conditionnement.map((value) => (
                      <span
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
                    <span style={{ fontWeight: 600 }}>Description : </span>{" "}
                    {t(`product-${product.id}-${produit.id}.description`)}
                  </p>
                </div>
              </div>
            ))}
            {widthPhoneLg ? (
              <div className="random--product--container">
                {shuffledData.slice(0, 4).map((product) => (
                  <div
                    className="products--products--list--card"
                    key={product.id}
                  >
                    <Card
                      id={product.id}
                      img={product.imgUrl}
                      title={product.name}
                      text={product.description.slice(0, 60) + "..."}
                      className={"details"}
                      product={product}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="random--product--container">
                {shuffledData.slice(0, 12).map((product) => (
                  <div
                    className="products--products--list--card"
                    key={product.id}
                  >
                    <Card
                      id={product.id}
                      img={product.imgUrl}
                      title={product.name}
                      text={product.description.slice(0, 60) + "..."}
                      className={"details"}
                      product={product}
                    />
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
        </>
      ))}
      <div className="footer--product">
        <Footer />
      </div>
    </>
  );
}
