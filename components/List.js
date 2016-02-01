/**
 * Created by vadimdez on 24/01/16.
 */

import React from 'react';
import Reciepe from './Reciepe';

const List = ({remove, edit}, { store }) => {
  let recipes = store.getState().recipes.map((recipe, k) => {
    return (
      <Reciepe
      remove={remove.bind(this, k)}
      edit={edit.bind(this, k)}
      recipe={recipe} key={k} />
    );
  });

  return (
    <div>
      { recipes }
    </div>
  )
};

List.contextTypes = {
  store: React.PropTypes.object
};

export default List;