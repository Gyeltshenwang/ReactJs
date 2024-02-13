import {createContext, useState} from 'react'
import axios from 'axios'
// create a context 
const BookContext = createContext()

// provider 
const Provider  = ({children}) =>{
const [books,setBooks] = useState([])
const fetchBook = async() =>{
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data)
}
const onCreateHandler = async (title) =>{
    const post_data_to_server = await axios.post("http://localhost:3001/books",{
        title
    })

setBooks([...books,post_data_to_server.data])
}

const deleteBookById = async (id) =>{
    await axios.delete(`http://localhost:3001/books/${id}`)
    const update_book = books.filter(book =>  book.id !== id)
    setBooks(update_book)
}
const editBookById = async (id,new_title) =>{
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
    title:new_title
})

    const update_book = books.map((book)=> {
         
        if(book.id === id){
          return {...book,...response.data}
        }
        return book
    })
    setBooks(update_book)
}
 const valueToShare = {
 books,
 setBooks,
 fetchBook,
 onCreateHandler,
 deleteBookById,
 editBookById

 }
 return (<BookContext.Provider value ={valueToShare}>
    {children}
 </BookContext.Provider>)

}
export {Provider};

export default BookContext;


