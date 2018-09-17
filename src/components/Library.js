import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import './Library.css'

const Library = ({ books, changeShelf }) => {

    return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Currently Reading</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{books.map((book) => (book.shelf === 'currentlyReading' && 
										<li key={book.id} >
										<Book 
											key={book.id} 
											book={book} 
											changeShelf={changeShelf}
										/>
										</li>))}
								</ol>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{books.map((book) => (book.shelf === 'wantToRead' && 
										<li key={book.id} >
										<Book 
											key={book.id} 
											book={book}
											changeShelf={changeShelf} 
										/>
										</li>))}
								</ol>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{books.map((book) => (book.shelf === 'read' && 
										<li key={book.id} >
										<Book 
										key={book.id} 
										book={book}
										changeShelf={changeShelf} 
									/>
									</li>))}
								</ol>
							</div>
						</div>
					</div>
				</div>
				<div className="open-search">
						<Link className="open-search" to='/search'>Add a book</Link>
				</div>
			</div>
		)
}

export default Library