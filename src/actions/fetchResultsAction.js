// import { fetch } from "whatwg-fetch";
import {
  fetchResultsError,
  fetchResultsPending,
  fetchResultsSuccess
} from "./results";

import isFetchingAction from "./isFetchingAction";
import errorAction from "./errorAction";

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
    dispatch(errorAction(false));
    //clear previous results
    dispatch(fetchResultsSuccess([]));

    fetch(`http://localhost:3002/search/${encodeURIComponent(searchTerm)}`, {
      method: "GET"
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(response => {
        // const response = JSON.parse(responseText);
        dispatch(isFetchingAction(false));

        if (Array.isArray(response.results) && response.results.length > 0) {
          dispatch(fetchResultsSuccess(response.results));
        } else {
          dispatch(errorAction(true));
        }
      })
      .catch(error => {
        console.log(error, error);
        dispatch(isFetchingAction(false));
        dispatch(errorAction(true));
      });
  };
};
export default fetchResultsAction;
