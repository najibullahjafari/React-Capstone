import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
