import { authReducer } from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentUser: authReducer
})

export default rootReducer;
