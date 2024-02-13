import { createContext, useState} from "react";
import axios from "axios";
import { API } from "../api";

export const BookContext = createContext(null);

export const Provider = ({children}) =>{
    const [books,setBooks] = useState([])

    const CreateBooks = async (title) =>{
        const response  = await axios.post(API,{title})
        setBooks([...books,response.data])

    }
    const fetchBooks = async () =>{
        const response = await axios.get(API)
        setBooks(response.data)
    }
    const editBookById = async(id,title) =>{
        const response  = await axios.put(API+`/${id}`,{
            title
        })
        const update_books = books.map(book => {
            if (book.id === id){
               return {...book,...response.data}
            }
            return book
           
        })
        setBooks(update_books)

    }
    const deleteBookById = async (id) =>{
     await axios.delete(API+`/${id}`);
     const updateBooks = books.filter(book => book.id !== id)
     setBooks(updateBooks)
    }

    const value = {
      books,
      setBooks,
      CreateBooks,
      fetchBooks,
      editBookById,
      deleteBookById
    }

    return <BookContext.Provider value = {value}>
        {children}
    </BookContext.Provider>
}

