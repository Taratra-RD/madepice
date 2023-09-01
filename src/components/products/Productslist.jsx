import React from "react";
import Cardproduct from "./Cardproduct";
import "./css/Productslist.css";

export default function Productslist({ searchResultEmpty, filteredData }) {
  return (
    <div className="products--list">
      {searchResultEmpty ? (
        <p>No such product</p>
      ) : (
        filteredData.map((item) => (
          <div key={item.id} className="--card">
            <Cardproduct product={item} />
          </div>
        ))
      )}
    </div>
  );
}
