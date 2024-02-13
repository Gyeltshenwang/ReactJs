import React,{useState} from 'react'
import useBookContext from '../hook/hook-books-context'


function BookEdit({book,onSubmit}) {
    

const [title,setTitle] = useState(book.title)
const{editBookById} = useBookContext()


const eventHandler = (event) =>{
    setTitle(event.target.value)

}
const submitHandler = (event) => {
    event.preventDefault()
    onSubmit()
    editBookById(book.id,title)
    

}



  return (
    <div>
        <form className='book-edit' onSubmit={submitHandler}>
            <label>Title</label>
            <input className = "input" onChange = {eventHandler} value ={title} />
            <button className = 'button is-primary' > 
            Save
            </button>
        </form>
    </div>
  )
}

export default BookEdit