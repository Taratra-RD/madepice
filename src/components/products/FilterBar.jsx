import React from "react";
import "./css/FilterBar.css";

export default function FilterBar({
  groupedProducts,
  selectedLetter,
  setSelectedLetter,
}) {
  const ordered = Object.keys(groupedProducts)
    .sort()
    .reduce((obj, key) => {
      obj[key] = groupedProducts[key];
      return obj;
    }, {});

  return (
    <div className="filter--and--search--bar">
      <div className="search--bar--line">
        <div className="search--bar">
          <input type="text" className="search--bar--search" />
          <div className="search--bar--button">Rechercher</div>
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
        <label>
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
          <label key={letter}>
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
