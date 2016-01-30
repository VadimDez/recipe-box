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
    this.state.recipes.push({
      name,
      ingridients
    });

    localStorage.setItem('recipes', JSON.stringify(this.state.recipes));

    this.setState({
      recipes: this.state.recipes
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

  componentWillMount() {
    this.store = this.props.store;
  }

  render() {
    return (
      <div>
        <List
          remove={this.removeRecipe.bind(this)}
          edit={this.editRecipe.bind(this)}
          recipes={this.store.getState().recipes} />

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

export default Main;