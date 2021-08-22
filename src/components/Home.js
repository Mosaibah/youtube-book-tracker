import React from 'react'
import Shelf from './Shelf';
import {
    Link
  } from "react-router-dom";

const Home = ({books, changeShelf}) => {

    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            
            {/* shelf */}
            <Shelf section='Currently Reading' books={books} category="currentlyReading" changeShelf={changeShelf}/>
            <Shelf section='Want To Read' books={books} category="wantToRead" changeShelf={changeShelf}/>
            <Shelf section='Read' books={books} category="read" changeShelf={changeShelf}/>
           
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="open-serch__link">Add a book</Link>

        </div>
      </div>
    )
}

export default Home
