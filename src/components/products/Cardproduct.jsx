import React from "react";
import "./css/Cardproduct.css";
import { useMediaQuery } from "usehooks-ts";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Cardproduct({ product }) {
  const cardBackground = {
    backgroundImage: `url(${product.imgUrl})`,
  };

  const cardBackground1 = {
    backgroundImage: `url(${product.imgUrl_1})`,
  };

  const history = useNavigate();

  let widthX = useMediaQuery("(min-width:670px)");

  const handleCard = () => {
    let cardProduct = document.getElementById(`card--product--${product.name}`);
    let cardImage = document.getElementById(`card--image--${product.name}`);
    let cardBody = document.getElementById(`card--body--${product.name}`);
    let cardTitle = document.getElementById(`card--title--${product.name}`);

    if (cardProduct.className === `card--product` && widthX) {
      cardProduct.className += "--hover";
      cardProduct.style.backgroundImage = `none`;
      cardProduct.style.backgroundColor = "black";
      cardImage.className += "--hover";
      cardTitle.className += "--hover";
      cardBody.className += "--hover";
    } else if (cardProduct.className === `card--product` && !widthX) {
      cardProduct.className += "--hover";
      cardProduct.style.backgroundColor = "black";
      cardProduct.style.backgroundImage = `url(${product.imgUrl})`;
      cardImage.className += "--hover";
      cardTitle.className += "--hover";
      cardBody.className += "--hover";
    } else {
      cardProduct.className = "card--product";
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
  const { t } = useTranslation();
  return (
    <div
      className="card--product"
      id={`card--product--${product.name}`}
      onMouseEnter={handleCard}
      onMouseLeave={handleCard}
      style={cardBackground}
      onClick={() => history(`/product/${product.id}`)}
    >
      <div
        className="card--image"
        id={`card--image--${product.name}`}
        style={cardBackground1}
      ></div>
      <Link
        className="card--title"
        id={`card--title--${product.name}`}
        style={{ fontFamily: "Canela Deck Trial" }}
      >
        {t(`product-${product.id}.name`)}
      </Link>
      <Link className="card--body" id={`card--body--${product.name}`}>
        <div
          className="card--title--body"
          style={{ fontFamily: "Canela Deck Trial" }}
        >
          {t(`product-${product.id}.name`)}
        </div>
        <div className="card--description">
          {truncate(t(`product-${product.id}.description`))}
        </div>
        <div className="card--button">{t("caroussel.5")}</div>
      </Link>
    </div>
  );
}
