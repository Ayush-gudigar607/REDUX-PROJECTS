import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[]
};

const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload);
        },
      //which help to remove the todo
        removeTodo:(state,action)=>{
            // if false come it will throw from the list or if true it will not throw from the list
            state.todos=state.todos.filter(todo=>todo.id!==action.payload);
        }
    }
})

export const {addTodo,removeTodo}=todoSlice.actions;
export default todoSlice.reducer;