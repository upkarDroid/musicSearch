import React, { Component } from "react";
import NoResultFound from "./NoResultFound";
import ResultItem from "./ResultItem";
import Spinner from "../Spinner";
import "./searchResults.css";

const SearchResults = ({ allResults, isFetching }) => {
  // currently we are displaying first 10 results out of 200
  //TODO:: implement pagination locally, as API does not support pagination
  const renderedResults = allResults.length ? (
    allResults
      .slice(0, 10)
      .map((result, index) => (
        <ResultItem result={result} key={`${result.collectionId}${index}`} />
      ))
  ) : (
    <NoResultFound />
  );
  return (
    <div className="resultContainer">
      {isFetching ? (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      ) : (
        renderedResults
      )}
    </div>
  );
};

export default SearchResults;
