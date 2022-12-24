import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './reducers/user_reducers';


const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default function initStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    }),
    preloadedState,
    enhancers: []
  });


  return store;
}
