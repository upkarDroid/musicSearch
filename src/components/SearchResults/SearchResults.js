import React, { useState, useEffect } from "react";
import NoResultFound from "./NoResultFound";
import ResultItem from "./ResultItem";
import Spinner from "../Spinner";
import InfiniteScroll from "react-infinite-scroller";

import debounce from "lodash/debounce";
import "./searchResults.css";

const SearchResults = ({
  allResults,
  isFetching,
  error = false,
  paginatedResults
}) => {
  const { displayItems = [] } = paginatedResults;
  const [resultsToShow, setresultsToShow] = useState([]);
  const [pageNo, setPageNo] = useState(0);

  // currently we are displaying first 10 results out of 200
  //TODO:: implement pagination locally, as API does not support pagination
  const renderedResults = !error ? (
    resultsToShow.map((result, index) => (
      <ResultItem result={result} key={`${result.collectionId}${index}`} />
    ))
  ) : (
    <NoResultFound />
  );

  useEffect(() => {
    setPageNo(0);
    setresultsToShow(
      allResults[0] ? allResults.slice(0, pageNo ? 10 * pageNo : 10) : []
    );
  }, [allResults]);

  const loader = (
    <div className="spinner-wrapper">
      <Spinner />
    </div>
  );

  const loadMore = () => {
    setresultsToShow(allResults.slice(0, pageNo ? 10 * pageNo : 9));
    setPageNo(pageNo + 1);
  };
  return (
    // <div className="resultsContainer">
    <InfiniteScroll
      pageStart={2}
      threshold={1000}
      loadMore={debounce(loadMore, 500)}
      hasMore={resultsToShow.length < allResults.length}
      loader={loader}
      className="results-container"
    >
      {renderedResults}
    </InfiniteScroll>
    // </div>

    // <div className="resultContainer">
    //   {isFetching ? (
    //     <div className="spinner-wrapper">
    //       <Spinner />
    //     </div>
    //   ) : (
    //     renderedResults
    //   )}
    // </div>
  );
};

export default SearchResults;
