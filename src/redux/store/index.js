import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../reducer/authReducer";
import { citaReducer } from "../reducer/citaReducer";

const reducers = combineReducers({
  auth: authReducer,
  cita: citaReducer,
});

const composeEnhacers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhacers(applyMiddleware(thunk))
);
