
import { useState } from "react"
import { useBookContext } from "../hook/hooks_book_context"

function Edit({title,id,onSubmit}) {
    const[showTitle,setShowTitle] = useState(title)
    const {editBookById} = useBookContext()


    const onSubmitHandler = (event) =>{
     event.preventDefault()
     onSubmit()
     editBookById(id,showTitle)

    }

    const onEditHandler = (event) =>{
        setShowTitle(event.target.value)
    }

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <input value={showTitle}  onChange={onEditHandler}/>
            <button > save </button>
        </form>
    </div>
  )
}

export default Edit