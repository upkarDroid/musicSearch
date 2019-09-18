import {
  FETCH_RESULTS_ERROR,
  FETCH_RESULTS_PENDING,
  FETCH_RESULTS_SUCCESS,
  SHOW_NEXT_RESULT_PAGE
} from "../constants";

import initialState from "../store/initialState";

export const ResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESULTS_ERROR:
      return [];
      break;

    case FETCH_RESULTS_SUCCESS:
      return action.results;
      break;

    case SHOW_NEXT_RESULT_PAGE:
      const allResults = [...state];
      const resultsShown = allResults.splice(0, 20);
      return {
        ...state,
        allResults,
        resultsShown
      };
      break;

    default:
      return state;
      break;
  }
};

export const getResults = state => state.allResults;
export const getResultsPending = state => state.isFetching;
export const getResultsError = state => state.error;
