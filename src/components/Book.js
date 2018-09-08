import React, { Component } from 'react'


class Book extends Component {
  state = {
    content: this.props.conteudo
  }

   

  render() {

    const conteudo = this.state.content
      return(
          <div className="book" key={conteudo.id}>
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${conteudo.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                <select>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
              </div>
            
              <div className="book-title">{conteudo.title}</div>
              <div className="book-authors">{conteudo.authors}</div>
          </div>
      )
   }
}
export default Book