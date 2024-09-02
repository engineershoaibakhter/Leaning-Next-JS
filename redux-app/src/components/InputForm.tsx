"use client"
import { addTodo } from "@/redux/todoSlice";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";

const InputForm = () => {
  const dispatch=useDispatch();
  const [todo,setTodo]=useState("");
  const handleTodo=(e:React.MouseEvent<HTMLFormElement,MouseEvent>)=>{
    e.preventDefault();
    console.log(todo);
    if(todo===""){
      toast.error("Please write your todo")
    }
    else{
      dispatch(addTodo({
        _id:Math.random().toString(),
        todo:todo
      }
      ))

      toast.success("Todo added");
      setTodo("");
    }
  }
  return (
    <div>
      {/* Todo Form */}
      <form onClick={handleTodo} className="flex items-center gap-4 h-10 md:h-12 relative">
        <input
          type="text"
          className="flex-1 h-full border-[1px] border-gray-600
            bg-transparent pl-4 pr-6 placeholder:text-gray-400 text-base placeholder:text-sm tracking-wide
            rounded-md outline-none hover:border-green-500
            focus-visible:border-gray-500 duration-200"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
        />
          {
            todo && (
        <MdClose
        onClick={()=>setTodo("")}
        className="absolute top-3.5 text-lg right-28 hover:text-red-600 cursor-pointer duration-200"/>

            )
          }
        <button type="submit" className="h-full border-[1px] border-gray-600 px-2 *:rounded-md 
        hover:text-orange-600 uppercase duration-200
        text-sm md:text-base">Add todo</button>
      </form>
      <TodoList />
      {/* TodoList */}
    </div>
  );
};

export default InputForm;
