import React from 'react'
import ShelfSearch from './ShelfSearch';
import {
    Link
  } from "react-router-dom";

const Search = ({handleSearch, search, booksFromSearch, changeShelf, loadSearch}) => {
    return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={handleSearch}/>

              </div>
            </div>
            {/* shelf */}
            <ShelfSearch booksFromSearch={booksFromSearch} changeShelf={changeShelf} loadSearch={loadSearch}/>
          </div>
    )
}

export default Search
