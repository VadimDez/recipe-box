/**
 * Created by vadimdez on 24/01/16.
 */

import React from 'react';
import { Recipe } from './Recipe';

const List = ({remove, edit}, { store }) => {
  return (
    <div>
      {
        store.getState().recipes.map((recipe, k) => {
          return (
            <Recipe
              remove={ remove.bind(this, k) }
              edit={ edit.bind(this, k) }
              recipe={ recipe }
              key={ k }
            />
          );
        })
      }
    </div>
  )
};

List.contextTypes = {
  store: React.PropTypes.object
};

export default List;