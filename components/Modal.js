/**
 * Created by vadimdez on 25/01/16.
 */

import React from 'react';

class Modal extends React.Component {

  constructor() {
    super();

    this.recipe = this.getEmptyRecipe();
  }

  getEmptyRecipe() {
    return { name: '', ingredients: '' };
  }

  updateValue(field) {
    return (e) => {
      this.recipe[field] = e.target.value;
      this.forceUpdate();
    }
  }

  componentWillReceiveProps() {
    const state = this.context.store.getState();
    this.recipe = state.recipes[state.modals.editKey] || this.getEmptyRecipe();
    this.isNew = !isNaN(state.modals.editKey);
  }

  render() {
    return (

      <div className={'modal-container ' + ((this.props.active) ? '' : 'hidden')}>
        <div className={ 'modal' }>
          <div className="title">
            <h3>{ this.props.title }</h3>
          </div>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              onChange={ this.updateValue('name') }
              value={ this.recipe.name }
            />
          </div>
          <div>
            <label htmlFor="">Ingredients</label>
            <input
              type="text"
              onChange={ this.updateValue('ingredients') }
              value={ this.recipe.ingredients }
            />
          </div>

          <div className="actions">
            <button
              className="btn"
              onClick={() => {
              this.props.save(this.recipe);

              if (this.isNew) {
                this.recipe = this.getEmptyRecipe()
              }
            }}>
              { this.props.text }
            </button>
            <button
              className="btn"
              onClick={this.props.cancel}
            >
              Cancel
            </button>
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
