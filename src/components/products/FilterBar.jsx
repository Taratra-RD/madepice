import { Link } from "react-router-dom";
import "./css/FilterBar.css";
import { useTranslation } from "react-i18next";

export default function FilterBar({
  handleSearch,
  filterByFirstLetter,
  uniqueFirstLetters,
  searchQuery,
  handleChange,
  searchResultEmpty,
  filteredDataSuggestion,
}) {
  const { t } = useTranslation();
  return (
    <div className="filter--and--search--bar">
      <div className="search--bar--line">
        <div className="search--bar">
          <input
            type="text"
            placeholder={t("product.2")}
            value={searchQuery}
            onChange={handleChange}
            className="search--bar--search"
          />
          <div className="search--bar--button" onClick={handleSearch}>
            {t("product.3")}
          </div>
        </div>
        <div className="select-bar">
          {/* Trier par category:&nbsp;
          <select name="" id="" className="select--bar--select">
            <option value="Epice">Epice</option>
            <option value="Fruit">Fruit</option>
          </select> */}
        </div>
      </div>
      <div
        className="products--list--suggestion"
        style={{ display: `${searchQuery === "" ? "none" : "block"}` }}
      >
        {searchResultEmpty ? (
          <p>No such product</p>
        ) : (
          filteredDataSuggestion.map((item) => (
            <div key={item.id} className="--card--suggestion">
              <div
                className="--image--suggestion"
                style={
                  item.imgUrl
                    ? { backgroundImage: `url(${item.imgUrl})` }
                    : { backgroundColor: "black" }
                }
              ></div>
              <Link className="--card--suggestion--name">
                {item.name.toLowerCase()}
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="filter--bar">
        <div
          onClick={() => filterByFirstLetter("Tous")}
          className="filter--bar--alphabet"
        >
          {t("product.4")}
        </div>
        {uniqueFirstLetters.sort().map((letter, index) => (
          <div
            key={index}
            onClick={() => filterByFirstLetter(letter)}
            className="filter--bar--alphabet"
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}
