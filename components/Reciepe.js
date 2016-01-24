/**
 * Created by vadimdez on 24/01/16.
 */
import React from 'react';

class Reciepe extends React.Component {
  render() {
    var ingridients = this.props.recipe.ingridients.split(',') || [];

    ingridients = ingridients.map(function (name, k) {
      return <div key={k}>{name}</div>
    });

    return (
      <div>
        <div>Name: {this.props.recipe.name}</div>
        <div>Ingridients</div>
        <div>
          {ingridients}
        </div>
        <button onClick={this.props.remove}>Delete</button>
        <button>Edit</button>
      </div>
    )
  }
}

export default Reciepe;