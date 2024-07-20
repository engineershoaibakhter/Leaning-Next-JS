const { configureStore } = require("@reduxjs/toolkit");
const reducer =require('./slice')

export default configureStore({
    // reducer: reducer,
    reducer
  })