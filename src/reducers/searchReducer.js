import { SET_SEARCH_TERM } from "../constants";
import initialState from "../store/initialState";

export default (state = initialState, action) => {
  if (action.type === SET_SEARCH_TERM) {
    return { ...state, searchTerm: action.searchTerm };
  }
  return state;
};
