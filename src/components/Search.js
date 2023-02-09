import React from 'react';
import { useState } from 'react';
import SearchIcon from './search.svg';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='ccontainer mb-3'>
      <div className='search'>
        <input
          placeholder='Search for recipes'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              // Call the API search function with the current searchTerm value
            }
          }}></input>
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchTerm}></img>
      </div>
    </div>
  );
}

export default Search;
