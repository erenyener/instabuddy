import { combineReducers } from 'redux';
import MediaReducer from './media';

const rootReducer = combineReducers({
  medias: MediaReducer
});

export default rootReducer;
