import React from 'react';
import { FilterLink } from '../../containers/FilterLink';

const Filter = () => (
  <div className="ui secondary vertical pointing menu">
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    <FilterLink filter="SHOW_INCOMPLETED">Incomplete</FilterLink>
  </div>
);

export { Filter };
