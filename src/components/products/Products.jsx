import React, { useState } from "react";
import "./css/Products.css";
import Productslist from "./Productslist";
import FilterBar from "./FilterBar";
import { data } from "../../data";
import Header from "../Header";

export default function Products() {
  const [products] = useState(data);
  const [selectedLetter, setSelectedLetter] = useState("");

  const groupProductsAlphabetically = (products) => {
    const grouped = {};
    products.forEach((product) => {
      const firstLetter = product.name[0].toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(product);
    });
    return grouped;
  };

  const groupedProducts = groupProductsAlphabetically(products);

  return (
    <div className="products">
      <div className="products-header">
        <Header/>
        <div className="header--text">Nos Produits</div>
      </div>
      <div className="products--body">
        <div className="products-filter--bar">
          <FilterBar
            groupedProducts={groupedProducts}
            selectedLetter={selectedLetter}
            setSelectedLetter={setSelectedLetter}
          />
        </div>
        <div>
          {selectedLetter === ""
            ? Object.keys(groupedProducts).map((letter) => (
                <div key={letter} className="products--products--list">
                  <Productslist
                    selectedLetter={letter}
                    groupedProducts={groupedProducts[letter]}
                  />
                </div>
              ))
            : selectedLetter in groupedProducts && (
                <div key={selectedLetter} className="products--products--list">
                  <Productslist
                    selectedLetter={selectedLetter}
                    groupedProducts={groupedProducts[selectedLetter]}
                  />
                </div>
              )}
        </div>
      </div>
    </div>
  );
}
