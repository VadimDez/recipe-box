/**
 * Created by vadimdez on 24/01/16.
 */

import React from 'react';
import List from './List';
import Add from './Add';

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

  render() {
    return (
      <div>
        <List remove={this.removeRecipe.bind(this)} recipes={this.state.recipes} />
        <Add recipe={this.state.newRecipe}
             updateName={this.handleChangeName.bind(this)}
             updateIngridients={this.handleChangeIngridients.bind(this)}
             addRecipe={this.addRecipe.bind(this)} />
      </div>
    )
  }
}

export default Main;