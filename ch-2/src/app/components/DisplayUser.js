"use client";
import React from 'react';
import { useSelector } from 'react-redux';

const DisplayUser = () => {
  // Correctly accessing users from state
  const userData = useSelector((data) => data.users); 
  console.log("userData ",userData);

  return (
    <>
      <h1>Display Users</h1>
      <ul>
        {userData && userData.length > 0 ? (
          userData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))
        ) : (
          <p>No users available</p>
        )}
      </ul>
    </>
  );
};

export default DisplayUser;