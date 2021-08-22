import React, { Component } from 'react'
import Book from './Book'

export default class ShelfSearch extends Component {
    render() {
        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">Search</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                 {/* Book */}

                 {
                     this.props.loadSearch ? (

                         this.props.booksFromSearch.map((book)=>(
        
                         <Book key={book.id}  book={book} changeShelf={this.props.changeShelf}/>
        
                         ))
                     ): (
                         this.props.booksFromSearch
                     )
                 }
                </ol>
              </div>
            </div>  
    )
       
    }
}
