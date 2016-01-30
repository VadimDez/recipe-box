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

  /**
   * On name change
   * @param name
   */
  handleChangeNameEdit(name) {
    this.state.inEdit.name = name;
    this.setState({
      inEdit: this.state.inEdit
    });
  }

  /**
   * On ingridients change
   * @param ingridients
   */
  handleChangeIngridientsEdit(ingridients) {
    this.state.inEdit.ingridients = ingridients;
    this.setState({
      inEdit: this.state.inEdit
    });
  }

  render() {
    return (
      <div>
        <List remove={this.removeRecipe.bind(this)} edit={this.editRecipe.bind(this)} recipes={this.state.recipes} />
        <Modal
             save={this.addRecipe.bind(this)} />

        <Modal recipe={this.state.inEdit}
             updateName={this.handleChangeNameEdit.bind(this)}
             updateIngridients={this.handleChangeIngridientsEdit.bind(this)}
             save={this.addRecipe.bind(this)} />
      </div>
    )
  }
}

export default Main;