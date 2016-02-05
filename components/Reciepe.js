/**
 * Created by vadimdez on 24/01/16.
 */
import React from 'react';

class Reciepe extends React.Component {
  render() {
    var ingredients = this.props.recipe.ingredients.split(',') || [];

    ingredients = ingredients.map(function (name, k) {
      return <div key={k}>{name}</div>
    });

    return (
      <div className="recipe">
        <div className="name">{this.props.recipe.name}</div>
        <div>Ingredients</div>
        <div>
          { ingredients }
        </div>
        <button onClick={this.props.remove}>Delete</button>
        <button onClick={this.props.edit}>Edit</button>
      </div>
    )
  }
}

export default Reciepe;