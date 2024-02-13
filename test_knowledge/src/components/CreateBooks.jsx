import { useState,useEffect } from "react"
import { useBookContext } from "../hook/hooks_book_context"


function CreateBooks() {
    const [title,setTitle]  = useState('')
    // console.log('this is the title',title)
   
    const {CreateBooks,fetchBooks} = useBookContext()
    useEffect(() =>{
      fetchBooks()
    },[])
   

    const onSubmitHandler = (event) =>{
        event.preventDefault()
        CreateBooks(title)
        setTitle('')


    }
    const onCreateTitleHandler = (event) =>{
        setTitle(event.target.value)
    }
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <input value = {title} onChange={onCreateTitleHandler} />
            <button> Create new Book </button>
            
        </form>
    </div>
  )
}

export default CreateBooks