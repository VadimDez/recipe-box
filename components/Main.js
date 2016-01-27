/**
 * Created by vadimdez on 24/01/16.
 */

import React from 'react';
import List from './List';
import Modal from './Modal';
import store from './../store';

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
  addRecipe() {
    this.state.recipes.push(this.state.newRecipe);

    localStorage.setItem('recipes', JSON.stringify(this.state.recipes));

    this.setState({
      recipes: this.state.recipes
    });

    this.state.newRecipe = {
      name: '',
      ingridients: ''
    };
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
  handleChangeName(name) {
    this.state.newRecipe.name = name;
    this.setState({
      newRecipe: this.state.newRecipe
    });
  }

  /**
   * On ingridients change
   * @param ingridients
   */
  handleChangeIngridients(ingridients) {
    this.state.newRecipe.ingridients = ingridients;
    this.setState({
      newRecipe: this.state.newRecipe
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
        <Modal recipe={this.state.newRecipe}
             updateName={this.handleChangeName.bind(this)}
             updateIngridients={this.handleChangeIngridients.bind(this)}
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