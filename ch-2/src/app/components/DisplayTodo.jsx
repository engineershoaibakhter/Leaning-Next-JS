"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../redux/feature/todo/todoSlice';

const DisplayTodo = () => {
    const dispatch = useDispatch();
    
    // Access the correct state property
    const  list  = useSelector(state => state.list);
    console.log("list ",list);
    
    return (
        <div>
            <h2>Todo List</h2>
            {/* {listOfTodo && listOfTodo.length > 0 ? (
                <ul>
                    {listOfTodo.map((todo) => (
                        <li key={todo.id}>
                            {todo.text} 
                            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No todos available</p>
            )} */}
        </div>
    );
}

export default DisplayTodo