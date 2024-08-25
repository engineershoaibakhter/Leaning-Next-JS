"use client"
const { configureStore } = require("@reduxjs/toolkit");
const todoReducer =require('./feature/todo/todoSlice.js')

export default configureStore({
    reducer:todoReducer
  })