/**
 * Created by vadimdez on 27/01/16.
 */

import {createStore} from 'redux';
import {combineReducers} from 'redux';

const recips = (state = [], action) => {
  return state;
};

const app = combineReducers({
  recips
});

const store = createStore(app);

export default store;