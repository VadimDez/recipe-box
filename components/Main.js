/**
 * Created by vadimdez on 24/01/16.
 */

import React from 'react';
import List from './List';
import Modal from './Modal';

class Main extends React.Component {

  componentDidMount() {
    const store = this.context.store

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
      type: 'ADD_RECIPE',
      name: recipe.name,
      ingredients: recipe.ingredients
    });
  }

  /**
   * Remove recipe
   * @param key
   */
  removeRecipe(key) {
    this.store.dispatch({
      type: 'DELETE_RECIPE',
      key: key
    });
  }

  editRecipe(key) {
    this.editModal(true, key);
  }

  addModal(value) {
    this.store.dispatch({
      type: 'ADD_MODAL_ACTION',
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
      type: 'EDIT_MODAL_ACTION',
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
      <div>
        <List
          remove={this.removeRecipe.bind(this)}
          edit={this.editRecipe.bind(this)}
        />
        <button onClick={this.openAddModal.bind(this)}>Add</button>

        <Modal
          active={state.modals.addModal}
          save={this.addRecipe.bind(this)}
          text={'Add'}
          cancel={this.closeAddModal.bind(this)}
        />

        <Modal
          active={state.modals.editModal}
          recipe={state.recipes[state.modals.editKey]}
          save={this.addRecipe.bind(this)}
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