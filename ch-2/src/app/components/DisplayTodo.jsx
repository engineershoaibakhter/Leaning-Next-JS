"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../redux/feature/todo/todoSlice';

const DisplayTodo = () => {
    const dispatch = useDispatch();
    
    // Access the correct state property
    const listOfTodo = useSelector(state => state.todos);
    
    return (
        <div>
            {listOfTodo && listOfTodo.length > 0 ? (
                listOfTodo.map((todo) => (
                    <li key={todo.id}>
                        {todo.text} 
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                    </li>
                ))
            ) : (
                <p>No todos available</p>
            )}
        </div>
    );
}

export default DisplayTodo;
