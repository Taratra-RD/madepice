import React, { useState } from "react";
import "./css/Products.css";
import Productslist from "./Productslist";
import FilterBar from "./FilterBar";
import { data } from "../../data";
import Header from "../Header";
import leaveUp from "../../images/Leaves 1 (1).png";
import leaveDown from "../../images/Leaves 2 (1).png";
import Footer from "../Footer";

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
        <Header />
        <div className="header--text" style={{fontFamily:'Canela'}}>Nos Produits</div>
        <img src={leaveUp} alt="leaveUp" className="leave--up" />
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
      <div className="products-footer">
        <Footer/>
        <img src={leaveDown} alt="leaveDown" className="leave--down" />
      </div>
    </div>
  );
}
