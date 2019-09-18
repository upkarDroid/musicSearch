import { combineReducers } from "redux";
import { ResultsReducer } from "./searchResults";
import search from "./searchReducer";
import isFetchingReducer from "./isFetchingReducer";

export default combineReducers({
  searchTerm: search,
  allResults: ResultsReducer,
  isFetching: isFetchingReducer
});
