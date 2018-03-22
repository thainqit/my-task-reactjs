import status from './status';
import sort from './sort';
import { combineReducers } from 'redux';

const myReducer = combineReducers({
  status, //status: status
  sort    //sort: sort
});

export default myReducer;