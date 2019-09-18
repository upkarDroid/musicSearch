import { FETCH_RESULTS_ERROR } from "../constants";

const errorAction = (error = true) => {
  return {
    type: FETCH_RESULTS_ERROR,
    error
  };
};

export default errorAction;
