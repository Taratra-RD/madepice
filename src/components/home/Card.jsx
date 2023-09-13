import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { data } from "../../data";
import "../css/Card.css";
import { useMediaQuery } from "usehooks-ts";
import { useEffect } from "react";
import "../css/Card.css";

const Card = ({ product }) => {
  // const cardStyle = {
  //     backgroundImage: `url(${img})`, // Set the background image URL dynamically
  // };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // return (
  //     <div className={`card ${className}` } style={cardStyle}>
  //         <div className="card-title">
  //             <h3 style={{ color: 'aliceblue', fontFamily: 'Canela',filter:'' }}>{title}</h3>
  //         </div>
  //         <div className="card-info">
  //             <div className="img-top-card" style={{backgroundImage:`url(${''})`}}></div>
  //             <div className="text-bottom-card">
  //                 <h3 style={{ color: 'white', fontFamily: 'Canela' }}>{title}</h3>
  //                 <p style={{ color: 'white', paddingTop: '5px', paddingBottom: '5px', fontFamily:'Raleway' }}>
  //                     {text}
  //                 </p>
  //                 <Link to={'/product/'+id}>
  //                     <button className="btn savoir-plus" style={{ background: '#f2e5d1', borderRadius: '8px',fontFamily:'Raleway',fontWeight:700  }}>
  //                         En savoir plus
  //                     </button>
  //                 </Link>
  //             </div>
  //         </div>
  //     </div>
  // );

  console.log(product);
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
        {product.name}
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
          {product.name}
        </div>
        <div className="card--description--card">
          {truncate(product.description)}
        </div>
        <div className="card--button--card">Savoir plus</div>
      </Link>
    </div>
  );
};

export default Card;
