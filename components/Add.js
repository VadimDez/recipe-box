/**
 * Created by vadimdez on 25/01/16.
 */

import React from 'react';

class Add extends React.Component {
  constructor() {
    super();

    this.state = {
      recipe: {
        name: '',
        ingridients: ''
      }
    };
  }

  addRecipe() {

  }


  /**
   * On name change
   * @param e
   */
  handleChangeName(e) {
    this.state.recipe.name = e.target.value;
    this.setState({
      recipe: this.state.recipe
    });
  }

  /**
   * On ingridients change
   * @param e
   */
  handleChangeIngridients(e) {
    this.state.recipe.ingridients = e.target.value;
    this.setState({
      newRecipe: this.state.recipe
    });
  }

  render() {
    return (
      <div>
        <label>Name</label>
        <input type="text" value={this.state.recipe.name} onChange={this.handleChangeName.bind(this)} />
        <label>Ingridients</label>
        <input type="text" value={this.state.recipe.ingridients} onChange={this.handleChangeIngridients.bind(this)} />
        <button onClick={this.addRecipe.bind(this)}>Add</button>
      </div>
    )
  }
}

export default Add;
