import React from 'react';

import './SortList.css'

const SortList = ({onChange}) => {
  return (
    <article 
      tabIndex="0" 
      className="sort-container"
      aria-label="sort-message-list-dropdown"
    >
      <select 
        tabIndex="0" 
        className="sort-select" 
        type="text" 
        onChange={onChange}
      >
        <option value="">Sort Happy Thoughts</option>
        <option tabIndex="0" aria-label="most-likes" value='liked'>Most likes</option>
        <option tabIndex="0" aria-label="oldest-first" value='oldest'>Oldest first</option>
        <option tabIndex="0" aria-label="newest-first" value='default'>Newest first</option>
      </select>
    </article>
  )
};
export default SortList;