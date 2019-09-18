import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchInputComponent from "../components/SearchInput";
import fetchResultsAction from "../actions/fetchResultsAction";

const mapStateToProps = ({ searchTerm, isFetching }) => ({
  srchString: searchTerm,
  isFetching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchResults: fetchResultsAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInputComponent);
