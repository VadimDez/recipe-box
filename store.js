/**
 * Created by vadimdez on 27/01/16.
 */

import {createStore} from 'redux';
import {combineReducers} from 'redux';


var recipesFromLocalStorage = localStorage.getItem('recipes');

if (!recipesFromLocalStorage || recipesFromLocalStorage === 'undefined') {
  recipesFromLocalStorage = [];
} else {
  recipesFromLocalStorage = JSON.parse(recipesFromLocalStorage);
}

const recipes = (state = recipesFromLocalStorage, action) => {
  let newState;
  if (action.type === 'DELETE_RECIPE') {
     newState = state
      .slice(0, action.key)
      .concat(state.slice(action.key + 1));

    localStorage.setItem('recipes', JSON.stringify(newState));
  } else if (action.type === 'ADD_RECIPE') {
    newState = state.concat({
      name: action.name,
      ingridients: action.ingridients
    });

    localStorage.setItem('recipes', JSON.stringify(newState));
  }

  return newState || state;
};

const modals = (state = {addModal: false, editModal: false, editKey: null}, action) => {

  if (action.type === 'ADD_MODAL_ACTION') {
    // hide/show add modal, dismiss edit modal
    return Object.assign({}, state, {
      addModal: action.isOpen,
      editModal: false,
      editKey: null
    });
  } else if (action.type === 'EDIT_MODAL_ACTION') {
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