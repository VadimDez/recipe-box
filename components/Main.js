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
    this.state.recipes.splice(key, 1);

    this.setState({
      recipes: this.state.recipes
    });
  }

  editRecipe(key) {
    this.setState({
      edited: key,
      inEdit: this.state.recipes[key]
    });
  }

  componentWillMount() {
    this.setState({
      recipes: JSON.parse(localStorage.getItem('recipes')) || [{name: 'test', ingridients: 'test, test'}]
    });
  }

  render() {
    return (
      <div>
        <List
          remove={this.removeRecipe.bind(this)}
          edit={this.editRecipe.bind(this)}
          recipes={this.state.recipes} />

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