const { createSlice, nanoid } = require('@reduxjs/toolkit');

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
    },
    removeUser:(state,action)=>{
        console.log(action);
        const data=state.users.filter((item)=>{
            return item.id!==action.payload;
        })
        state.users=data;
    }
  },
});

export const { addUser,removeUser } = userSlice.actions;
export default userSlice.reducer;
