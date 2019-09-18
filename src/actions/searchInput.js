import { SET_SEARCH_TERM } from "../constants";

export const setSearchTerm = searchTerm => {
  return {
    type: SET_SEARCH_TERM,
    searchTerm
  };
};
