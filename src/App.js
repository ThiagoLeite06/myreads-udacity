import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import { Link, Route } from 'react-router-dom'
import Shelf from './components/Shelf'
import SearchPage from './components/SearchPage'

class BooksApp extends Component {
  state = {
    books: [],
  }

  getAllBook() {
    BooksAPI.getAll()
    .then((books) => (
      this.setState({books: books})
    ))
  }

  componentDidMount() {
    this.getAllBook()
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({
          books
        })
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
         <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelf books={this.state.books} changeShelf={this.changeShelf} />
          </div>
          <div className="open-search">
            <Link
            to="/search" 
            >Add a book</Link>
          </div>
        </div>
        
      )}/> 

      <Route path="/search" component={SearchPage} />

      </div>
    )
  }
}
export default BooksApp