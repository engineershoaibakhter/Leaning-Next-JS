const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    todo: {
        list: [{ id: 1, text: "Hello World" }],
    },
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
            state.todo.list.push(todo);
            console.log("list ", JSON.stringify(state.todo.list, null, 2));
        },
        removeTodo: (state, action) => {
            // Corrected the filter method to properly update the state
            state.todo.list = state.todo.list.filter((data) => data.id !== action.payload);
        },
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;