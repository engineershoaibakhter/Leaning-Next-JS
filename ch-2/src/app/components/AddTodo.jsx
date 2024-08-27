"use client"
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../redux/feature/todo/todoSlice'

const AddTodo = () => {
    const [input,setInput]=useState("")
    const dispatch=useDispatch();

    const onSubmitForm = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }
  return (
    <form onSubmit={onSubmitForm}>
        <input type="text" name="title" value={input} placeholder="Enter a todo title"/>
        <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodo