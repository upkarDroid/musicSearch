import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import mainReducer from "../reducers";
import { loadState, saveState } from "../localStorage";
import throttle from "lodash/throttle";
import initialState from "./initialState";

const configireStore = () => {
  const middlewares = [thunk];
  const savedState = loadState() || initialState;
  // const savedState = initialState;

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    mainReducer,
    savedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  //OPTIONAL:: save state to localStorage, atmost once every second
  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000)
  );
  return store;
};

export default configireStore;
