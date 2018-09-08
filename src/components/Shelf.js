import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from '../utils/BooksAPI'

class Shelf extends Component {
   state = {
      books: this.props.book,
      currently_reading: [],
      want_to_read: [],
      already_read: []
   }

   componentDidMount() {
      BooksAPI.getAll().then((books) => {
         console.log(books);
         const already_read = books.filter((book) => book.shelf === "read")
         const currently_reading = books.filter((book) => book.shelf === "currentlyReading")
         const want_to_read = books.filter((book) => book.shelf === "wantToRead")

         this.setState({
            already_read: already_read,
            currently_reading: currently_reading,
            want_to_read: want_to_read
         })

         console.log(already_read)
         console.log(currently_reading)
         console.log(want_to_read)

      })
   }

   render() {
      return (
         <div>
            <div className="bookshelf">
               <h2 className="bookshelf-title">{this.state.currently_reading.shelfs}</h2>
               <div className="bookshelf-books">
                  <ol className="books-grid">
                  {this.state.currently_reading.map((books) => (
                     <li>
                        <Book conteudo={books} />
                     </li>
                  ))}
                  </ol>
               </div>
            </div>
         </div>
      )
   }
}

export default Shelf