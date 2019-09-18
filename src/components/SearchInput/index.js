import React, { useState, useEffect } from "react";
import "./input.css";
import Spinner from "../Spinner";

const SearchInput = ({ srchString, fetchResults, isFetching }) => {
  const [searchVal, setSearchval] = useState(srchString || "");
  const handleInputChange = event => {
    const value = event.target.value;
    setSearchval(value);
  };

  const handleClick = e => {
    e.preventDefault();
    fetchResults(searchVal);
  };
  return (
    <div className="search__container">
      <input
        className="search__input"
        value={searchVal}
        onChange={handleInputChange}
        type="text"
        placeholder="Search an Artist, Album or Song"
      />
      <button className="search__submit" onClick={handleClick}>
        {isFetching ? <Spinner white /> : "Search"}
      </button>
    </div>
  );

  // return <div>working till here</div>;
};

export default SearchInput;
