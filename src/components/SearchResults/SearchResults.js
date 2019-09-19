import React, { useState, useEffect } from "react";
import NoResultFound from "./NoResultFound";
import ResultItem from "./ResultItem";
import Spinner from "../Spinner";
import InfiniteScroll from "react-infinite-scroller";
import { RESULTS_PER_PAGE } from "../../constants";

import debounce from "lodash/debounce";
import "./searchResults.css";

const SearchResults = ({ allResults, isFetching, error = false }) => {
  const [resultsToShow, setresultsToShow] = useState([]);
  const [pageNo, setPageNo] = useState(0);

  const renderedResults = resultsToShow.map((result, index) => (
    <ResultItem result={result} key={`${result.collectionId}${index}`} />
  ));

  useEffect(() => {
    //reset everything when search results change
    setPageNo(0);
    setresultsToShow(allResults.length ? allResults.slice(0, 9) : []);
  }, [allResults]);

  const loader = (
    <div className="spinner-wrapper">
      <Spinner />
    </div>
  );

  const loadMore = () => {
    setresultsToShow(
      allResults.slice(
        0,
        pageNo ? RESULTS_PER_PAGE * pageNo : RESULTS_PER_PAGE - 1
      )
    );
    setPageNo(pageNo + 1);
  };
  return !error ? (
    <InfiniteScroll
      pageStart={0}
      threshold={1000}
      loadMore={debounce(loadMore, 500)}
      hasMore={resultsToShow.length < allResults.length}
      loader={loader}
      className="results-container"
    >
      {renderedResults}
    </InfiniteScroll>
  ) : (
    <NoResultFound />
  );
};

export default SearchResults;
