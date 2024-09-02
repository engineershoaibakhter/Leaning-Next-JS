import { State } from '@/type';
import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const {todoList}=useSelector((state:State)=>state?.todo);
    console.log(todoList);
  return (
    <div className='flex flex-col gap-4 mt-2 p-4
    border border-gray-600 rounded-md'>
        {todoList?.map((item)=>(
            <p key={item?._id}>{item?.todo}</p>
        ))}
        {todoList?.length === 0 && (
            <p className='text-center text-base text-yellow-600
            font-medium tracking-wide'>
                Your Todo list is Empty!
            </p>
        )}
    </div>
  )
}

export default TodoList