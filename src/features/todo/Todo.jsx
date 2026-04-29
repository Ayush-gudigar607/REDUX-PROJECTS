import { useDispatch,useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice.js";
import { useState } from "react";

const Todo=()=>{
    //parameters for input and setInput to manage the state of the input field, dispatch to send actions to the Redux store, and todos to access the current list of todos from the Redux state.
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);

    const handleAddTodo = () => {
        if (input.trim()) {
            dispatch(addTodo({ id: Date.now(), text: input.trim() }));
            setInput("");
        }
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a todo..."
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleDeleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;