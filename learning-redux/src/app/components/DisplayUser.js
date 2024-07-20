import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';

const DisplayUser = () => {
  const userData = useSelector((state) => state.users.users); // Access users from state.users
  const userDispatch=useDispatch()
  return (
    <>
      <h1>Display Users</h1>
      <ul>
        {userData && userData.length > 0 ? (
          userData.map((item) => (
            <li key={item.id}>
             <span>{item.name} </span>
             <button onClick={()=>userDispatch(removeUser(item.id))}>Remove</button>
             </li>
          ))
        ) : (
          <p>No users available</p>
        )}
      </ul>
    </>
  );
};

export default DisplayUser;
