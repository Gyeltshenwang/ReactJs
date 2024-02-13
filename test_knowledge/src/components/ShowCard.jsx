
import { useBookContext } from "../hook/hooks_book_context"
import { useState } from "react"
import Edit from "./Edit"
import './ShowCard.css'
function ShowCard({book}) {
    const [showEdit,setShowEdit] = useState(false)
    const {deleteBookById} = useBookContext()
    const DeleteBooks = () => {
        deleteBookById(book.id)
    
       }

   const EditBooks = () =>{
    setShowEdit(!showEdit)
  
   }
  const onSubmitHandler = () =>{
    setShowEdit(false)
  }
  
   let content = <h2>{book.title}</h2>
   if (showEdit){
      content = <Edit title={book.title}  id = {book.id} onSubmit = {onSubmitHandler}/>
   }
   
  return (
    <div className="card-container">
     < div className="card">
       <div className="card-buttons">

        <button className="delete-button" onClick ={DeleteBooks}>Delete</button>
        <button className="edit-button" onClick ={EditBooks}  >Edit</button>
       </div>
       <img src="https://placekitten.com/300/200" alt="Card Image" />
      <h2>{content}</h2>
      </div>
    </div>
    
  )
}

export default ShowCard