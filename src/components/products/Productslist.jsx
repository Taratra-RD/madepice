import React from "react";
import Cardproduct from "./Cardproduct";
import "./css/Productslist.css";

export default function Productslist({ groupedProducts, searchResults }) {
  return (
    <div className="products--list">
      {groupedProducts.map((product) => (
        <div key={product.name} className="--card">
          <Cardproduct product={product} />
        </div>
      ))}
    </div>
  );
}
