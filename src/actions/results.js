import {
  FETCH_RESULTS_ERROR,
  FETCH_RESULTS_SUCCESS,
  SHOW_NEXT_RESULT_PAGE
} from "../constants";

export const fetchResultsSuccess = results => {
  return {
    type: FETCH_RESULTS_SUCCESS,
    results
  };
};

export const fetchResultsError = error => {
  return {
    type: FETCH_RESULTS_ERROR,
    error
  };
};

export const nextResultPage = () => ({ type: SHOW_NEXT_RESULT_PAGE });
