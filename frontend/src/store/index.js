import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import session from "./session";
import assetsReducer from "./assets";
import portfolioReducer from "./portfolio";

const rootReducer = combineReducers({
  assets: assetsReducer,
  session: session,
  portfolio: portfolioReducer,
});
const persistConfig = {
  key: "root",
  storage,
};

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const configureStore = (preloadedState) => {
  return createStore(persistedReducer, preloadedState, enhancer);
};

export const persistor = persistStore(configureStore);
