import React,{useState} from 'react'
import BookEdit from './BookEdit';
import useBookContext from '../hook/hook-books-context';

function BookShow({book}) {
    const[ShowEdit,setShowEdit] = useState(false)
    const {deleteBookById} = useBookContext()
   

    const deleteItem = () =>{
   
        deleteBookById(book.id);

    }
    const editHandler = () =>{
        setShowEdit(!ShowEdit)
    }
    const onSubmitHandler = () =>{
        setShowEdit(false)
       
    }

    let content = <h3>{book.title}</h3>
    if (ShowEdit) {
        content = <BookEdit book = {book}  onSubmit ={onSubmitHandler} />
    }

  return (
    <div className='book-show'>
        <div>
            <img  alt='book-img' src={`https://picsum.photos/seed/${book.id}/300/200`}/>
         {content}
        </div>
     

      <div className='actions'>
        <button className='edit' onClick={editHandler} >
            Edit
        </button>
        
        <button className='delete' onClick={deleteItem}>
            Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow