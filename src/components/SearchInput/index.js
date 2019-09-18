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

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      //user has pressed enter
      fetchResults(searchVal);
    }
  };
  return (
    <div className="search__container">
      <input
        className="search__input"
        value={searchVal}
        onChange={handleInputChange}
        type="text"
        placeholder="Search an Artist, Album or Song"
        onKeyUp={handleKeyDown}
      />
      <button className="search__submit" onClick={handleClick}>
        {isFetching ? <Spinner white /> : "Search"}
      </button>
    </div>
  );
};

export default SearchInput;
