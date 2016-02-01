/**
 * Created by vadimdez on 25/01/16.
 */

import React from 'react';

class Modal extends React.Component {

  render() {
    let recipe = this.props.recipe || {name: '', ingridients: ''};

    return (
      <div className={(this.props.active) ? '' : 'hidden'}>
        <label>Name</label>
        <input
          type="text"
          ref={node => {
            this.nameNode = node;
          }}
          defaultValue={recipe.name}
        />
        <label>Ingridients</label>
        <input
          type="text"
          ref={node => {
            this.ingridientsNode = node;
          }}
          defaultValue={recipe.ingridients}
        />
        <button
          onClick={() => {
            this.props.save(this.nameNode.value, this.ingridientsNode.value);
            this.nameNode.value = '';
            this.ingridientsNode.value = '';
        }}>
          { this.props.text }
        </button>
        <button onClick={this.props.cancel}>Cancel</button>
      </div>
    )
  }
}

export default Modal;
