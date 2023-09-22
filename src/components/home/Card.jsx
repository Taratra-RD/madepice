import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Card.css";
import { useMediaQuery } from "usehooks-ts";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Card = ({ product }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  const cardBackground = {
    backgroundImage: `url(${product.imgUrl})`,
  };

  const cardBackground1 = {
    backgroundImage: `url(${product.imgUrl_1})`,
  };

  const history = useNavigate();

  let widthX = useMediaQuery("(min-width:670px)");

  const handleCard = () => {
    let cardProduct = document.getElementById(
      `card--product--card--${product.name}`
    );
    let cardImage = document.getElementById(
      `card--image--card--${product.name}`
    );
    let cardBody = document.getElementById(`card--body--card--${product.name}`);
    let cardTitle = document.getElementById(
      `card--title--card--${product.name}`
    );

    if (cardProduct.className === `card--product--card` && widthX) {
      cardProduct.className += "--hover";
      cardProduct.style.backgroundImage = `none`;
      cardProduct.style.backgroundColor = "black";
      cardImage.className += "--hover";
      cardTitle.className += "--hover";
      cardBody.className += "--hover";
    } else if (cardProduct.className === `card--product--card` && !widthX) {
      cardProduct.className += "--hover";
      cardProduct.style.backgroundColor = "black";
      cardProduct.style.backgroundImage = `url(${product.imgUrl})`;
      cardImage.className += "--hover";
      cardTitle.className += "--hover";
      cardBody.className += "--hover";
    } else {
      cardProduct.className = "card--product--card";
      cardProduct.style.backgroundImage = `url(${product.imgUrl})`;
      cardProduct.style.backgroundColor = "rgb(5, 34, 34)";
      cardImage.className = "card--image";
      cardTitle.className = "card--title";
      cardBody.className = "card--body";
    }
  };

  const truncate = (text) => {
    const words = text.split(" ");

    if (words.length > 15) {
      const truncatedWords = words.slice(0, 15);
      return truncatedWords.join(" ") + "...";
    }

    return text;
  };

  return (
    <div
      className="card--product--card"
      id={`card--product--card--${product.name}`}
      onMouseEnter={handleCard}
      onMouseLeave={handleCard}
      style={cardBackground}
      onClick={() => history(`/product/${product.id}`)}
    >
      <div
        className="card--image--card"
        id={`card--image--card--${product.name}`}
        style={cardBackground1}
      ></div>
      <Link
        className="card--title--card"
        id={`card--title--card--${product.name}`}
        style={{ fontFamily: "Canela Deck Trial" }}
      >
        {t(`product-${product.id}.name`)}
      </Link>
      <Link
        to={`/product/${product.id}`}
        className="card--body--card"
        id={`card--body--card--${product.name}`}
      >
        <div
          className="card--title--body--card"
          style={{ fontFamily: "Canela Deck Trial" }}
        >
          {t(`product-${product.id}.name`)}
        </div>
        <div className="card--description--card">
          {truncate(t(`product-${product.id}.description`))}
        </div>
        <div className="card--button--card">Savoir plus</div>
      </Link>
    </div>
  );
};

export default Card;
