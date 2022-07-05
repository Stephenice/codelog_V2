import { useState } from "react";

const SearchBox = () => {
  return (
    <div className="search-container">
      <form action="" method="" className="form">
        <input
          type="search"
          placeholder="Search.."
          name="search"
          className="input_search"
        />
        <button type="submit" className="submit_button">
          <span className="iconify" data-icon="eva:search-fill"></span>
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
