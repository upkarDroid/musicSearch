import React, { Component } from "react";
import { connect } from "react-redux";
import SearchResultsComponent from "../components/SearchResults/SearchResults";

const mapStateToProps = ({
  allResults,
  isFetching,
  error,
  paginatedResults
}) => ({
  allResults,
  isFetching,
  error,
  paginatedResults
});

export default connect(mapStateToProps)(SearchResultsComponent);
