const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    todos: [{ id: 1, text: "Hello World" }],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            // Corrected the filter method to properly update the state
            state.todos = state.todos.filter((data) => data.id !== action.payload);
        },
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
