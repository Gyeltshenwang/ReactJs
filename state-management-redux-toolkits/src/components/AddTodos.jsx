
import { useState } from "react"
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
import Todos from "./Todos"
const AddTodos = () => {
    const [todos, setTodos] = useState('')
    const dispatch = useDispatch()

    const onSubmitHandler = event =>{
        event.preventDefault();
         dispatch(addTodo(todos));
         setTodos('')

    }

    
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <input  value={todos} onChange={(e) =>{ setTodos(e.target.value)}} />
        </form>
       
    </div>
  )
}

export default AddTodos