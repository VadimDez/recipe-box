/**
 * Created by vadimdez on 24/01/16.
 */

import React from 'react';
import List from './List';
import Modal from './Modal';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
      newRecipe: {
        name: '',
        ingridients: ''
      },
      edited: null,
      inEdit: {}
    };
  }

  /**
   * Add new recipe
   */
  addRecipe(name, ingridients) {
    this.store.dispatch({
      type: 'ADD_RECIPE',
      name,
      ingridients
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
    this.setState({
      edited: key,
      inEdit: this.state.recipes[key]
    });
  }

  render() {
    this.store = this.context.store;
    return (
      <div>
        <List
          remove={this.removeRecipe.bind(this)}
          edit={this.editRecipe.bind(this)}
        />

        <Modal
           save={this.addRecipe.bind(this)}
           text={'Add'}
        />

        <Modal
          recipe={this.state.inEdit}
          save={this.addRecipe.bind(this)}
          text={'Edit'}
        />
      </div>
    )
  }
}

Main.contextTypes = {
  store: React.PropTypes.object
};

export default Main;