/**
 * Created by vadimdez on 27/01/16.
 */

import { createStore, combineReducers } from 'redux';
import * as actionTypes from './constants/actionTypes';

const RECIPES_KEY = 'recipes';
var recipesFromLocalStorage = localStorage.getItem(RECIPES_KEY);

if (!recipesFromLocalStorage || recipesFromLocalStorage === 'undefined') {
  recipesFromLocalStorage = [];
} else {
  recipesFromLocalStorage = JSON.parse(recipesFromLocalStorage);
}

/**
 * Save recipes to local storage
 * @param recipes
 */
const saveRecipes = recipes => {
  localStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
};

const recipes = (state = recipesFromLocalStorage, action) => {
  let newState;

  if (action.type === actionTypes.DELETE_RECIPE) {
     newState = state
      .slice(0, action.key)
      .concat(state.slice(action.key + 1));

    saveRecipes(newState);
  } else if (action.type === actionTypes.ADD_RECIPE) {
    newState = state.concat({
      name: action.name,
      ingredients: action.ingredients
    });

    saveRecipes(newState);
  } else if (action.type === actionTypes.EDIT_RECIPE) {
    newState = state
      .slice(0, action.editKey)
      .concat({
        name: action.name,
        ingredients: action.ingredients
      })
      .concat(state.slice(action.editKey + 1));

    saveRecipes(newState);
  }

  return newState || state;
};

const modals = (state = {addModal: false, editModal: false, editKey: null}, action) => {

  if (action.type === actionTypes.ADD_MODAL_ACTION) {
    // hide/show add modal, dismiss edit modal
    return Object.assign({}, state, {
      addModal: action.isOpen,
      editModal: false,
      editKey: null
    });
  }

  if (action.type === actionTypes.EDIT_MODAL_ACTION) {
    // show/hide edit modal, and hide addModal
    return Object.assign({}, state, {
      editModal: action.isOpen,
      editKey: action.editKey,
      addModal: false
    });
  }

  return state;
};

const app = combineReducers({
  recipes,
  modals
});

const store = createStore(app);

export default store;