/**
 * Created by vadimdez on 25/01/16.
 */

import React from 'react';

class Modal extends React.Component {

  constructor() {
    super();

    this.state = {
      recipe: {name: '', ingridients: ''}
    };
  }

  componentWillMount() {
    //this.isNew = !this.props.recipe;
    this.setState({
      recipe: this.props.recipe || {name: '', ingridients: ''}
    });
  }

  updateValue(field) {
    return (e) => {
      this.state.recipe[field] = e.target.value;
      this.setState({
        recipe: this.state.recipe
      });
    }
  }

  render() {

    return (

      <div className={(this.props.active) ? '' : 'hidden'}>
        <label>Name</label>
        <input
          type="text"
          onChange={this.updateValue('name')}
          value={this.state.recipe.name}
        />
        <label>Ingridients</label>
        <input
          type="text"
          onChange={this.updateValue('ingridients')}
          value={this.state.recipe.ingridients}
        />
        <button
          onClick={() => {
          this.props.save(this.state.recipe.name, this.state.recipe.ingridients);

          if (this.isNew) {

            this.setState({
              recipe: {name: '', ingridients: ''}
            });
          }
        }}>
          { this.props.text }
        </button>
        <button onClick={this.props.cancel}>Cancel</button>
      </div>
    )
  }
}

export default Modal;
