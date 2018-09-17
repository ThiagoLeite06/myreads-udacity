import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import Book from './Book'
import './SearchPage.css'

class SearchPage extends Component {
  state = {
		books: []
  }

	searchBook = (query) => {
		if (query) {
			BooksAPI.search(query).then((books) => {
				  
				[...books].map((book) => (
					this.props.books.map((bookOnShelf) => (
						book.id === bookOnShelf.id && (book.shelf = bookOnShelf.shelf)
					))
				))
				this.setState({ books })	
			})
		} else {
			this.setState({ books: [] })
		}
	}
	
  render() {
		
		const { query, books } = this.state

		return (
			<div className="search-books">
        <div className="search-books-bar">
					<Link 
						className="close-search" 
						to='/'>Close</Link>
          <div className="search-books-input-wrapper">
						<input 
							type="text" 
							placeholder="Search by title or author" 
							value={query}
              onChange={(event) => this.searchBook(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {(!books.error && books.map(book => 
							<li>
							<Book 
								key={book.id} 
								book={book} 
								changeShelf={this.props.changeShelf} 
							/></li>)) || 
							
							<li>no result</li>}
          </ol>
        </div>
      </div>
		)
	}
}

export default SearchPage