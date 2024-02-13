import React,{useState} from 'react'
import useBookContext from '../hook/hook-books-context'


function CreateBook() {
    const[title,setTitle] = useState('')
    const {onCreateHandler} = useBookContext()
 
    const handleSubmit = (event) =>{
        event.preventDefault();
        onCreateHandler(title)
        setTitle('')
    }
    const titleHandler = (event) =>{
            setTitle(event.target.value)
    }
  return (
    <div className='book-create'>
        
        <div>
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className='input' value = {title}onChange ={titleHandler}/>
                <button className='button'>Create New book</button>
            </form>
        </div>
       
    </div>
  )
}

export default CreateBook