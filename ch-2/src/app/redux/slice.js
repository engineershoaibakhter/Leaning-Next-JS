const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users: [], // Initial state with a default user
};

const Slice = createSlice({
    name: 'addUserSlice',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload,
            };
            
            state.users.push(data);
            console.log(data); // Push new user data to the users array
        },
    },
});

export const { addUser } = Slice.actions;
export default Slice.reducer;
