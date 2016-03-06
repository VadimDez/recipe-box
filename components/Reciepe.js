/**
 * Created by vadimdez on 24/01/16.
 */
import React from 'react';

class Reciepe extends React.Component {
  render() {
    return (
      <div className="recipe">
        <div className="name">{this.props.recipe.name}</div>
        <div className="ingredient">
          { this.props.recipe.ingredients }
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