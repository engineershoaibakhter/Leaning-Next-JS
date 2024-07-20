import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice'; // Adjust the import path if necessary

const store = configureStore({
  reducer: {
    users: userReducer, // Ensure this matches the state name used in the useSelector
  },
});

export default store;
