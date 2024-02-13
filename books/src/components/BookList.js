import React from 'react'
import BookShow from './BookShow'
import useBookContext from '../hook/hook-books-context'


function BookList() {
    const {books} = useBookContext()

  return (
    <div className='book-list'>
        {books.map(book => <BookShow key={book.id} book={book}  />)}
    </div>
  )
}

export default BookList