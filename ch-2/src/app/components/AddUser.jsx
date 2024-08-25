"use client"

import React, { useState } from 'react'
import { addUser } from '../redux/slice';
import { useDispatch } from 'react-redux';

const AddUser = () => {
  const dispatch=useDispatch();
  const [name,setName]=useState("");

  const userDispatch=()=>{
    dispatch(addUser(name))
  }
  return (
    <>
    <h1>AddUser</h1>
    <form>
        <input type="text" name='name' onChange={(e)=>setName(e.target.value)} />
        <button onClick={userDispatch()}>Submit</button>
    </form>
    </>
  )
}

export default AddUser