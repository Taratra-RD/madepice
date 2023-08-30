import React, { useState } from "react";
import "./css/Products.css";
import Productslist from "./Productslist";
import FilterBar from "./FilterBar";
import { data } from "../../data";

export default function Products() {
  const [products] = useState(data);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [searchResults, setSearchResults] = useState(products);

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
  const [searchedData, setSearchedData] = useState(groupedProducts);

  return (
    <div className="products">
      <div className="products-header">
        <div>text</div>
        <div className="header--text">Nos Produits</div>
      </div>
      <div className="products--body">
        <div className="products-filter--bar">
          {selectedLetter === "" ? (
            <FilterBar
              groupedProducts={products}
              groupProductsAlphabetically={groupedProducts}
              selectedLetter={selectedLetter}
              setSearchedData={setSearchedData}
              searchedData={searchedData}
              setSearchResults={setSearchResults}
              setSelectedLetter={setSelectedLetter}
            />
          ) : (
            selectedLetter in searchedData && (
              <FilterBar
                groupedProducts={groupedProducts}
                groupProductsAlphabetically={groupedProducts}
                selectedLetter={selectedLetter}
                setSelectedLetter={setSelectedLetter}
                setSearchedData={setSearchedData}
                searchedData={searchedData}
                setSearchResults={setSearchResults}
              />
            )
          )}
        </div>
        <div>
          {selectedLetter === "" ? (
            <div className="products--products--list">
              <Productslist
                groupedProducts={searchResults}
                setSearchResults={setSearchResults}
                searchResults={searchResults}
              />
            </div>
          ) : (
            selectedLetter in searchedData && (
              <div key={selectedLetter} className="products--products--list">
                <Productslist
                  selectedLetter={selectedLetter}
                  groupedProducts={searchedData[selectedLetter]}
                  setSearchResults={setSearchResults}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
