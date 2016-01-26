/**
 * Created by vadimdez on 25/01/16.
 */

import React from 'react';

class Modal extends React.Component {
  /**
   * On name change
   * @param e
   */
  handleChangeName(e) {
    this.props.updateName(e.target.value);
  }

  /**
   * On ingridients change
   * @param e
   */
  handleChangeIngridients(e) {
    this.props.updateIngridients(e.target.value);
  }

  render() {
    return (
      <div>
        <label>Name</label>
        <input type="text" value={this.props.recipe.name} onChange={this.handleChangeName.bind(this)} />
        <label>Ingridients</label>
        <input type="text" value={this.props.recipe.ingridients} onChange={this.handleChangeIngridients.bind(this)} />
        <button onClick={this.props.save}>Add</button>
      </div>
    )
  }
}

export default Modal;
