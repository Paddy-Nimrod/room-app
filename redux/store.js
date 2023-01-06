import { createStore, applyMiddleware } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";

import mainReducer from "./reducers/reducers";

let middlewares = [thunkMiddleware];

function bindMiddleware(middleware) {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
}

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    };
    return nextState;
  } else {
    return mainReducer(state, action);
  }
};

function Store() {
  return createStore(reducer, bindMiddleware(middlewares));
}

export const wrapper = createWrapper(Store);
