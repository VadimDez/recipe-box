/**
 * Created by vadimdez on 24/01/16.
 */

import React from 'react';
import List from './List';
import Modal from './Modal';
import { Footer } from './Footer';
import * as actionTypes from './../constants/actionTypes';

class Main extends React.Component {

  componentDidMount() {
    const store = this.context.store;

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  /**
   * Add new recipe
   */
  addRecipe(recipe) {
    this.store.dispatch({
      type: actionTypes.ADD_RECIPE,
      name: recipe.name,
      ingredients: recipe.ingredients
    });
    this.closeAddModal()
  }

  /**
   * Modify existing recipe
   * @param recipe
   */
  modifyRecipe(recipe) {
    this.store.dispatch({
      type: actionTypes.EDIT_RECIPE,
      name: recipe.name,
      ingredients: recipe.ingredients,
      editKey: this.store.getState().modals.editKey
    });
    this.closeEditModal();
  }

  /**
   * Remove recipe
   * @param key
   */
  removeRecipe(key) {
    this.store.dispatch({
      type: actionTypes.DELETE_RECIPE,
      key: key
    });
  }

  editRecipe(key) {
    this.editModal(true, key);
  }

  addModal(value) {
    this.store.dispatch({
      type: actionTypes.ADD_MODAL_ACTION,
      isOpen: value
    })
  }

  openAddModal() {
    this.addModal(true);
  }

  closeAddModal() {
    this.addModal(false);
  }

  editModal(value, key) {
    this.store.dispatch({
      type: actionTypes.EDIT_MODAL_ACTION,
      isOpen: value,
      editKey: key
    })
  }

  closeEditModal() {
    this.editModal(false);
  }

  render() {
    this.store = this.context.store;
    const state = this.store.getState();

    return (
      <div id="main">
        <header>
          <div>
            <h1>Recipe box</h1>
          </div>
          <div className="add" onClick={this.openAddModal.bind(this)}>
            <i className="fa fa-plus"></i> Add
          </div>
        </header>
        <List
          remove={this.removeRecipe.bind(this)}
          edit={this.editRecipe.bind(this)}
        />

        <Footer />

        <Modal
          active={state.modals.addModal}
          title='Add new recipe'
          save={this.addRecipe.bind(this)}
          text={'Add'}
          cancel={this.closeAddModal.bind(this)}
        />

        <Modal
          active={state.modals.editModal}
          title='Edit recipe'
          recipe={state.recipes[state.modals.editKey]}
          save={this.modifyRecipe.bind(this)}
          text={'Edit'}
          cancel={this.closeEditModal.bind(this)}
        />
      </div>
    )
  }
}

Main.contextTypes = {
  store: React.PropTypes.object
};

export default Main;