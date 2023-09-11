import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./css/SingleProduct.css";
import Productslist from "../components/products/Productslist";
import { data } from "../data";
import Card from "../components/home/Card";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from "usehooks-ts";

export default function SingleProduct() {
  const { id } = useParams(); // Extract the 'id' parameter from the URL
  const widthPhoneLg = useMediaQuery("(max-width:720px)");
  const widthPhoneSm = useMediaQuery("(max-width:410px)");

  const [filteredData, setFilteredData] = useState(data);
  const [img, setImage] = useState("");

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
  const changeImg = () => {
    document.getElementById("single--product--left").style.backgroundImage = url(`${''}`)
  }

  useEffect(() => { }, []);
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
                  key={produit.id}
                  style={{ backgroundImage: `url('${produit.imgUrl}')` }}
                >
                  <i className="fas fa-chevron-left" onClick={changeImg}></i>
                  <i className="fas fa-chevron-right" onClick={changeImg}></i>
                </div>
                <div className="line-red"></div>
                <div className="single--product--right" key={produit.id}>
                  <h2 style={{ fontFamily: "Canela", color: "#F2E5D1" }}>
                    {produit.name}
                  </h2>
                  <br />
                  <p>
                    <span style={{ fontWeight: 600 }}>Goût : </span>
                    {produit.gout}
                  </p>
                  <p>
                    <span style={{ fontWeight: 600 }}>Intensité : </span>
                    {produit.intensite}
                  </p>
                  <p>
                    <span style={{ fontWeight: 600 }}>Parfum : </span>
                    {produit.parfum}
                  </p>
                  <p>
                    <span style={{ fontWeight: 600 }}>Texture : </span>
                    {produit.texture}
                  </p>
                  <p>
                    <span style={{ fontWeight: 600 }}>Origine géographique : </span>
                    {produit.origine}
                  </p>
                  <p>
                    <span style={{ fontWeight: 600 }}>Description : </span>{" "}
                    {produit.origine}
                  </p>
                </div>
              </div>
            ))}
            {widthPhoneLg ? (
              <div className="random--product--container">
                {shuffledData.slice(0, 4).map((product) => (
                  <div className="products--products--list--card" key={product.id}>
                    <Card
                      id={product.id}
                      img={product.imgUrl}
                      title={product.name}
                      text={product.description.slice(0, 90) + "..."}
                      className={"details"}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="random--product--container">
                {shuffledData.slice(0, 12).map((product) => (
                  <div className="products--products--list--card" key={product.id}>
                    <Card
                      id={product.id}
                      img={product.imgUrl}
                      title={product.name}
                      text={product.description.slice(0, 90) + "..."}
                      className={"details"}
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
                  Voir tout ...
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
