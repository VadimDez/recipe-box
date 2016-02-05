/**
 * Created by vadimdez on 25/01/16.
 */

import React from 'react';

class Modal extends React.Component {

  constructor() {
    super()

    this.recipe = {name: '', ingredients: ''}
  }

  updateValue(field) {
    return (e) => {
      this.recipe[field] = e.target.value;
      this.forceUpdate();
    }
  }

  componentWillReceiveProps() {
    const state = this.context.store.getState();
    this.recipe = state.recipes[state.modals.editKey] || {name: '', ingredients: ''};
    this.isNew = !isNaN(state.modals.editKey);
  }

  render() {
    return (

      <div className={'modal-container ' + ((this.props.active) ? '' : 'hidden')}>
        <div className={'modal'}>
          <div>
            <label>Name</label>
            <input
              type="text"
              onChange={this.updateValue('name')}
              value={this.recipe.name}
            />
          </div>

          <div>
            <label>Ingredients</label>
            <input
              type="text"
              onChange={this.updateValue('ingredients')}
              value={this.recipe.ingredients}
            />
          </div>

          <div>
            <button
              onClick={() => {
              this.props.save(this.recipe);

              if (this.isNew) {
                this.recipe = {name: '', ingredients: ''}
              }
            }}>
              { this.props.text }
            </button>
            <button onClick={this.props.cancel}>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}


Modal.contextTypes = {
  store: React.PropTypes.object
};

export default Modal;
