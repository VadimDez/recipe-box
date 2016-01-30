/**
 * Created by vadimdez on 27/01/16.
 */

import {createStore} from 'redux';
import {combineReducers} from 'redux';

const recipesFromLocalStorage = JSON.parse(localStorage.getItem('recipes')) || [];

const recipes = (state = recipesFromLocalStorage, action) => {
  if (action.type === 'DELETE_RECIPE') {
     let newState = state
      .slice(0, action.key)
      .concat(state.slice(action.key + 1));

    localStorage.setItem('recipes', JSON.stringify(newState));

    return newState;
  }

  if (action.type === 'ADD_RECIPE') {
    let newState = state.concat({
      name: action.name,
      ingridients: action.ingridients
    });

    localStorage.setItem('recipes', JSON.stringify(newState));

    return newState;
  }

  return state;
};

const app = combineReducers({
  recipes
});

const store = createStore(app);

export default store;