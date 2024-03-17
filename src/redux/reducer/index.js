import { combineReducers } from 'redux';
import cryptoDataReducer from './reducer';

const rootReducer = combineReducers({
  cryptoData: cryptoDataReducer,
});

export default rootReducer;
