import React, { Component } from "react";
import { connect } from "react-redux";
import SearchResultsComponent from "../components/SearchResults/SearchResults";

const mapStateToProps = ({ allResults, isFetching }) => ({
  allResults,
  isFetching
});

export default connect(mapStateToProps)(SearchResultsComponent);
