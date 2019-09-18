import { FETCH_RESULTS_PENDING } from "../constants";

const isFetchingAction = (status = false) => {
  return {
    type: FETCH_RESULTS_PENDING,
    status
  };
};

export default isFetchingAction;
