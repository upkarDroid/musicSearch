import { FETCH_RESULTS_ERROR } from "../constants";

export default (state = false, action) => {
  if (action.type === FETCH_RESULTS_ERROR) {
    return !!action.error;
  }

  return state;
};
