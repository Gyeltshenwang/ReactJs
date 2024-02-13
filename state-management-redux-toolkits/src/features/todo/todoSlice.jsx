// creating a slice, import createslice from redux-toolkits
import { createSlice,nanoid } from "@reduxjs/toolkit";

// initial state, 
const initialState = {
    // name of the state
    todos:[{id:1,text:"hello world "}]
}

// create a slice, or  reducers, 
// reducers or slices means functionality 

export const todoSlice = createSlice({
    // name of the slices
    name:'todo',
    // for every slice , there will be the initial state in redux-toolkits
    initialState,
    // create a reducer or slices 

    reducers:{
        // reducres consist of property and functions 
        addTodo: (state, action) =>{
            const todo  = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        // state give you the initial state access 
        // action 
        removeTodo: (state,action) =>{
            state.todos= state.todos.filter(todo => todo.id !== action.payload)
        },

        // updateTodo : (state,action) => {
        //     const updateTodo = state.todos.map((todo) =>  todo.id ===action)
        //     if (updateTodo) {
        //         updateTodo.text = action.payload.text
        //     }
        //     state
        // }


    },
})
export const {addTodo,removeTodo} = todoSlice.actions
export default  todoSlice.reducer