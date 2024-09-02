import { deleteTodo } from "@/redux/todoSlice";
import { State } from "@/type";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
    const dispatch=useDispatch();
    const [showRemove,setShowRemove]=useState(false);

  const { todoList } = useSelector((state: State) => state?.todo);
  console.log(todoList);
  return (
    <div
      className="flex flex-col gap-4 mt-2 p-4
    border border-gray-600 rounded-md"
    >
      {todoList?.length > 0 && (
        <>
        <ul
          className="max-h-[300px] border
            border-slate-500 p-2 shadow-lg
            shadow-gray-800 flex flex-col gap-2"
        >
          {todoList?.map((item) => (
            <li 
            className="border-l-green-500
            border-green-900 w-full font-medium
            border-[1px] border-l-[6px] px-2 py-1 cursor-pointer
            flex items-center justify-between"
             key={item?._id}>
                {item?.todo}
                <MdDelete 
                onClick={()=>{
                    dispatch(
                        deleteTodo(item?._id),
                    toast.success("Todo Deleted Successfully!"))
                }}
                className="text-lg hover:text-red-500
                duration-200"/>
                </li>
          ))}
        </ul>
        <button 
        onClick={()=>setShowRemove(true)}
        className="text-sm text-orange-500
        text-center bg-transparent border-[1px]
        border-gray-600 rounded-md px-4 py-3
        mt-2 hover:border-red-500 duration-200">Remove Todo</button>
        </>
      )}
      {todoList?.length === 0 && (
        <p
          className="text-center text-base text-yellow-600
            font-medium tracking-wide"
        >
          Your Todo list is Empty!
        </p>
      )}
      {
        showRemove && (
        <div className="w-full h-screen fixed 
        bg-bodyColor top-0 left-0 bg-opacity-60">
            <div className="absolute top-1/2 left-1/2
            transform -translate-x-1/2 -translate-y-1/2
            px-8 py-4 bg-bodyColor shadow-todoShadow rounded-md">
                <p>
                    Are you sure to <span>remove</span>
                    all the todos
                </p>
            </div>

        </div>)
      }
    </div>
  );
};

export default TodoList;
