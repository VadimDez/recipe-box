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
      return <div key={k}>{name}</div>
    });

    return (
      <div className="recipe">
        <div className="name">{this.props.recipe.name}</div>
        <div className="ingredients-title">Ingredients</div>
        <div className="ingredient">
          { ingredients }
        </div>
        <button className="btn" onClick={this.props.remove}>Delete</button>
        <button className="btn" onClick={this.props.edit}>Edit</button>
      </div>
    )
  }
}

export default Reciepe;