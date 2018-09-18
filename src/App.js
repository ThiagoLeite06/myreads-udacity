import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import Library from './components/Library'
import { Route } from 'react-router-dom'
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
          <Library
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>

      <Route path="/search" render={({ history }) => (
        <SearchPage
            books={this.state.books}
            changeShelf={(book, shelf) => {
              this.changeShelf(book, shelf)
              history.push('/')
            }}
          />
      )}/>
      </div>
    )
  }
}
export default BooksApp