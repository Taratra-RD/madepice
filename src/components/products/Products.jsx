import React, { useState, useEffect } from "react";
import "./css/Products.css";
import { data } from "../../data";
import Header from "../Header";
import leaveUp from "../../image/autres/Leaves/Leaves 1.webp";
import leaveDown from "../../image/autres/Leaves/Leaves 2.webp";
import Footer from "../Footer";
import FilterBar from "./FilterBar";
import Productslist from "./Productslist";
import { useTranslation } from "react-i18next";

export default function Products() {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filteredData, setFilteredData] = useState(data);
  const [filteredDataSuggestion, setFilteredDataSuggestion] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResultEmpty, setSearchResultEmpty] = useState(false);

  const filterByFirstLetter = (letter) => {
    if (letter === "Tous") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (item) => item.name.charAt(0).toLowerCase() === letter.toLowerCase()
      );
      setFilteredData(filtered);
    }
    setSearchQuery("");
  };
  // const filterByType = (type) => {
  //   if (type === "Tous") {
  //     setFilteredData(data);
  //   } else {
  //     const filtered = data.filter(
  //       (item) => item.type.toLowerCase() === type.toLowerCase()
  //     );
  //     setFilteredData(filtered);
  //   }
  //   setSearchQuery("");
  // };

  const uniqueFirstLetters = [
    ...new Set(data.map((item) => item.name.charAt(0).toLowerCase())),
  ];

  const handleSearch = () => {
    // Use searchQuery to filter data when the button is clicked
    const query = searchQuery;
    setSearchResultEmpty(false); // Reset search result flag

    // Check if the query matches any product names
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResultEmpty(filtered.length === 0);
    setFilteredData(filtered);
    setSearchQuery("");
  };

  const handleSearchSuggestion = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Check if the query is empty
    if (query === "") {
      setFilteredDataSuggestion([]); // Clear the filtered data
      return;
    }

    // Check if the query matches any product names
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResultEmpty(filtered.length === 0);
    setFilteredDataSuggestion(filtered);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    return handleSearchSuggestion;
  };

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredDataSuggestion([]);
    } else {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredDataSuggestion(filtered);
    }
  }, [searchQuery]);

  const { t } = useTranslation();

  return (
    <div className="products">
      <Header />
      <div className="products-header">
        <div className="header--text" style={{ fontFamily: "Canela" }}>
          {t("product.1")}
        </div>
        <div className="scroll--down">
          <i className="fas fa-chevron-down"></i>
        </div>
        <img src={leaveUp} alt="leaveUp" className="leave--up" />
      </div>
      <div className="products--body">
        <div>
          <FilterBar
            handleSearch={handleSearch}
            filterByFirstLetter={filterByFirstLetter}
            uniqueFirstLetters={uniqueFirstLetters}
            searchQuery={searchQuery}
            handleSearchSuggestion={handleSearchSuggestion}
            handleChange={handleChange}
            filteredDataSuggestion={filteredDataSuggestion}
            searchResultEmpty={searchResultEmpty}
          />
        </div>
        <div className="products--products--list">
          <Productslist
            searchResultEmpty={searchResultEmpty}
            filteredData={filteredData}
          />
        </div>
      </div>
      <div className="products-footer">
        <img src={leaveDown} alt="leaveDown" className="leave--down" />
        <Footer />
      </div>
    </div>
  );
}
