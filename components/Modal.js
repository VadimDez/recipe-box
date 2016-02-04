/**
 * Created by vadimdez on 25/01/16.
 */

import React from 'react';

class Modal extends React.Component {

  constructor() {
    super()

    this.recipe = {name: '', ingridients: ''}
  }

  updateValue(field) {
    return (e) => {
      this.recipe[field] = e.target.value
      this.forceUpdate()
    }
  }

  render() {
    this.recipe = this.props.recipe || {name: '', ingridients: ''}

    return (

      <div className={(this.props.active) ? '' : 'hidden'}>
        <label>Name</label>
        <input
          type="text"
          onChange={this.updateValue('name')}
          value={this.recipe.name}
        />
        <label>Ingridients</label>
        <input
          type="text"
          onChange={this.updateValue('ingridients')}
          value={this.recipe.ingridients}
        />
        <button
          onClick={() => {
          this.props.save(this.recipe.name, this.recipe.ingridients);

          if (this.isNew) {
            this.recipe = {name: '', ingridients: ''}
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
