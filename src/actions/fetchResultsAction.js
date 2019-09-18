// import { fetch } from "whatwg-fetch";
import {
  fetchResultsError,
  fetchResultsPending,
  fetchResultsSuccess
} from "./results";

import isFetchingAction from "./isFetchingAction";

import { setSearchTerm } from "./searchInput";

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = response => {
  return response.json();
};

const fetchResultsAction = searchTerm => {
  return dispatch => {
    dispatch(setSearchTerm(searchTerm));
    dispatch(isFetchingAction(true));

    fetch(`http://localhost:3002/search/${encodeURIComponent(searchTerm)}`, {
      method: "GET"
      // mode: "no-cors",
      // headers: new Headers({
      //   "Content-Type": "application/json",
      //   Accept: "application/json"
      // })
    })
      .then(checkStatus)
      .then(response => {
        return response.json();
      })
      .then(response => {
        // const response = JSON.parse(responseText);
        dispatch(isFetchingAction(false));
        dispatch(fetchResultsSuccess(response.results));
      })
      .catch(error => {
        console.log(error, error);
        dispatch(isFetchingAction(false));
        dispatch(fetchResultsError());
      });
  };
};
export default fetchResultsAction;
