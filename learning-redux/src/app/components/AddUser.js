import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slice'; // Adjust the import path if necessary

const AddUser = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const userDispatch = () => {
    dispatch(addUser(name));
    setName(''); // Clear input after dispatching
  };

  return (
    <>
      <h1>Add User</h1>
      <input
        name='username'
        placeholder='Add User'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={userDispatch}>Add</button>
    </>
  );
};

export default AddUser;
