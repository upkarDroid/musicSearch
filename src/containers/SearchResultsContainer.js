import React, { Component } from "react";
import { connect } from "react-redux";
import SearchResultsComponent from "../components/SearchResults/SearchResults";

const mapStateToProps = ({ allResults, isFetching, error }) => ({
  allResults,
  isFetching,
  error
});

export default connect(mapStateToProps)(SearchResultsComponent);
