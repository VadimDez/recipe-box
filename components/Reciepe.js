/**
 * Created by vadimdez on 24/01/16.
 */
import React from 'react';

class Reciepe extends React.Component {
  render() {
    var ingredients = [];
    if (this.props.recipe.ingredients) {
      ingredients = this.props.recipe.ingredients.split(',');
    }

    ingredients = ingredients.map(function (name, k) {
      return <span key={k}>{name}</span>
    });

    return (
      <div className="recipe">
        <div className="name">{this.props.recipe.name}</div>
        <div className="ingredient">
          { ingredients }
        </div>
        <div className="actions">
          <button className="btn edit" onClick={this.props.edit}><i className="fa fa-pencil"></i></button>
          <button className="btn delete" onClick={this.props.remove}><i className="fa fa-trash"></i></button>
        </div>
      </div>
    )
  }
}

export default Reciepe;