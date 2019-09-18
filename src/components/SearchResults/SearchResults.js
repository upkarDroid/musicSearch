import React, { Component } from "react";
import NoResultFound from "./NoResultFound";
import ResultItem from "./ResultItem";
import "./searchResults.css";

const SearchResults = ({ allResults }) => {
  return allResults.length ? (
    <div className="resultContainer">
      {allResults.map((result, index) => (
        <ResultItem result={result} key={`${result.collectionId}${index}`} />
      ))}
    </div>
  ) : (
    <NoResultFound />
  );
};

export default SearchResults;
