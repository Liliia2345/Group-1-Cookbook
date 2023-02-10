import React from 'react';
import { useState } from 'react';
import SearchIcon from './search.svg';
const contentful = require('contentful');

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    environment: process.env.REACT_APP_ENVIRONMENT_ID,
  });

  return (
    <div className='ccontainer mb-3'>
      <div className='search'>
        <input
          placeholder='Search for recipes'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              // eslint-disable-next-line no-lone-blocks
              {
                client.getEntries({ query: { searchTerm } });
              }
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
