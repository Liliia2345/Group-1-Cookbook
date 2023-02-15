import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "./search.svg";
// const contentful = require("contentful");

function Search({ handleSearch }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search`);
    handleSearch(query);
  };
  return (
    <div className="ccontainer mb-3">
      <div className="search">
        <form onSubmit={handleSubmit} className="search-content">
          <input
            placeholder="Search for recipes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(query);
              }
            }}
          ></input>
          <button type="submit" className="bg-transparent">
            <img src={SearchIcon} alt="search" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
