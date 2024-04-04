import {createSlice, nanoid ,PayloadAction } from "@reduxjs/toolkit"

interface TodoApp  {
    id: string;
    text: string;
}
interface TodoState{
    items: TodoApp[]
}

const initialState : TodoState = {
    items:[]
}

export const todoSlice = createSlice({
    
    name : "todo",
    initialState,
    reducers:{
        addTodo : (state,action : PayloadAction<string>) =>{
            state.items.push(
                {
                    id : nanoid(),
                    text: action.payload
                }
            )
        }
    }
})

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer