import { combineReducers } from "redux";
import { ResultsReducer } from "./searchResults";
import search from "./searchReducer";
import isFetchingReducer from "./isFetchingReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  searchTerm: search,
  allResults: ResultsReducer,
  isFetching: isFetchingReducer,
  error: errorReducer
});
