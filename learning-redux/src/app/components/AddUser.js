import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slice';

const AddUser = () => {
  const [name,setName]=useState('');
  const dispatch=useDispatch();

  const userDispatch=()=>{
    dispatch(addUser(name))
  }
  return (
    <>
    <h1>AddUser</h1>
    <input name='username' placeholder='Add User' onChange={(e)=>setName(e.target.value)}/>
    <button onClick={userDispatch}>Add</button>
    </>
  )
}

export default AddUser