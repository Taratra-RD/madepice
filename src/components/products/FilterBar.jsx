import React, { useState } from "react";
import "./css/FilterBar.css";

export default function FilterBar({
  groupedProducts,
  selectedLetter,
  setSelectedLetter,
  setSearchedData,
  setSearchResults,
  groupProductsAlphabetically,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (selectedLetter === "") {
      const filteredResults = groupedProducts.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      const filteredResults = Object.keys(groupedProducts).reduce(
        (acc, key) => {
          const filteredItems = groupedProducts[key].filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (filteredItems.length > 0) {
            acc[key] = filteredItems;
          }
          return acc;
        },
        {}
      );
      setSearchedData(filteredResults);
    }
  };

  const ordered = Object.keys(groupProductsAlphabetically)
    .sort()
    .reduce((obj, key) => {
      obj[key] = groupProductsAlphabetically[key];
      return obj;
    }, {});

  return (
    <div className="filter--and--search--bar">
      <div className="search--bar--line">
        <div className="search--bar">
          <input
            type="text"
            className="search--bar--search"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search--bar--button" onClick={handleSearch}>
            Rechercher
          </div>
        </div>
        <div className="select--bar">
          Trier par:&nbsp;
          <select name="" id="" className="select--bar--select">
            <option value="name">Nom</option>
            <option value="type">Type</option>
            <option value="saveur">Saveur</option>
          </select>
        </div>
      </div>
      <div className="filter--bar">
        <label className="filter--bar--alphabet">
          <input
            style={{ display: "none" }}
            type="radio"
            value=""
            checked={selectedLetter === ""}
            onChange={() => setSelectedLetter("")}
          />
          Tous
        </label>
        {Object.keys(ordered).map((letter) => (
          <label key={letter} className="filter--bar--alphabet">
            <input
              style={{ display: "none" }}
              type="radio"
              value={letter}
              checked={selectedLetter === letter}
              onChange={() => setSelectedLetter(letter)}
            />
            {letter.toLowerCase()}
          </label>
        ))}
      </div>
    </div>
  );
}
