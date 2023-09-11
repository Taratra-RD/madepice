import { Link } from "react-router-dom";
import "./css/FilterBar.css";

export default function FilterBar({
  handleSearch,
  filterByFirstLetter,
  uniqueFirstLetters,
  searchQuery,
  handleChange,
  searchResultEmpty,
  filteredDataSuggestion,
}) {
  // const ordered = Object.keys(groupProductsAlphabetically)
  //   .sort()
  //   .reduce((obj, key) => {
  //     obj[key] = groupProductsAlphabetically[key];
  //     return obj;
  //   }, {});

  return (
    <div className="filter--and--search--bar">
      <div className="search--bar--line">
        <div className="search--bar">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleChange}
            className="search--bar--search"
          />
          <div className="search--bar--button" onClick={handleSearch}>
            Rechercher
          </div>
        </div>
        <div className="select--bar">
          Trier par category:&nbsp;
          <select name="" id="" className="select--bar--select">
            <option value="Epice">Epice</option>
            <option value="Fruit">Fruit</option>
          </select>
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
          onClick={() => filterByFirstLetter("All")}
          className="filter--bar--alphabet"
        >
          All
        </div>
        {uniqueFirstLetters.map((letter, index) => (
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
