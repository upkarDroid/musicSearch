import { FETCH_RESULTS_PENDING } from "../constants";

import initialState from "../store/initialState";

const isFetchingReducer = (state = initialState, action) => {
  if (action.type === FETCH_RESULTS_PENDING) {
    return !!action.status;
  }

  return state;
};

export default isFetchingReducer;
