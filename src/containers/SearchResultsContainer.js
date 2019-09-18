import React, { Component } from "react";
import { connect } from "react-redux";
import SearchResultsComponent from "../components/SearchResults/SearchResults";

const mapStateToProps = state => ({
  allResults: state.allResults
});

export default connect(mapStateToProps)(SearchResultsComponent);
