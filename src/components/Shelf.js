import React, { Component } from 'react'
import Book from './Book'

const Shelf = ({books, changeShelf}) =>  {

   const already_read = books.filter((book) => book.shelf === "read")
   const currently_reading = books.filter((book) => book.shelf === "currentlyReading")
   const want_to_read = books.filter((book) => book.shelf === "wantToRead")

   return (
      <div>
         <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
               <ol className="books-grid">
               {currently_reading.map((books) => (
                  <li>
                     <Book book={books} changeShelf={changeShelf} />
                  </li>
               ))}
               </ol>
            </div>
         </div>
         <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
               <ol className="books-grid">
               {want_to_read.map((books) => (
                  <li>
                     <Book book={books} />
                  </li>
               ))}
               </ol>
            </div>
         </div>
         <div className="bookshelf">
            <h2 className="bookshelf-title">Already Read</h2>
            <div className="bookshelf-books">
               <ol className="books-grid">
               {already_read.map((books) => (
                  <li>
                     <Book book={books} />
                  </li>
               ))}
               </ol>
            </div>
         </div>
      </div>
   )
}


export default Shelf