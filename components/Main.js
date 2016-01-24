/**
 * Created by vadimdez on 24/01/16.
 */

import React from 'react';
import List from './List';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
      newRecipe: {
        name: '',
        ingridients: ''
      }
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

  removeRecipe(key) {
    this.state.recipes.splice(key, 1);

    this.setState({
      recipes: this.state.recipes
    });
  }

  /**
   * On name change
   * @param e
   */
  handleChangeName(e) {
    this.state.newRecipe.name = e.target.value;
    this.setState({
      newRecipe: this.state.newRecipe
    });
  }

  /**
   * On ingridients change
   * @param e
   */
  handleChangeIngridients(e) {
    this.state.newRecipe.ingridients = e.target.value;
    this.setState({
      newRecipe: this.state.newRecipe
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
        <List remove={this.removeRecipe.bind(this)} recipes={this.state.recipes} />
        <div>
          <label>Name</label>
          <input type="text" value={this.state.newRecipe.name} onChange={this.handleChangeName.bind(this)} />
          <label>Ingridients</label>
          <input type="text" value={this.state.newRecipe.ingridients} onChange={this.handleChangeIngridients.bind(this)} />
          <button onClick={this.addRecipe.bind(this)}>Testing</button>
        </div>
      </div>
    )
  }
}

export default Main;