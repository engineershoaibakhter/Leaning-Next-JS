"use client";

import React, { useState } from 'react';
import { addUser } from '../redux/slice';
import { useDispatch,useSelector } from 'react-redux';

const AddUser = () => {
  const dispatch = useDispatch();
  const getData=useSelector((state)=>state.users);
  console.log("getData ",getData);
  const [name, setName] = useState("");

  const userDispatch = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    dispatch(addUser(name)); // Dispatch the addUser action with the user's name
    setName(""); // Optionally reset the input field after submission
  };

  return (
    <>
      <h1>Add User</h1>
      <form onSubmit={userDispatch}>
        <input 
          type="text" 
          name='username' 
          placeholder='Add User' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddUser;
