import React from 'react';

import './SortList.css'

const SortList = () => {
  return (
    <article tabIndex="0" className="sort-container">
      <select tabIndex="0" className="sort-select">
        <option value="">Sort Happy Thoughts</option>
        <option value="liked">Most likes</option>
        <option value="oldest">Oldest first</option>
        <option value="default">Newest first</option>
      </select>
    </article>
  )
};
export default SortList;