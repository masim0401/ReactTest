import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    users: [

    ]
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        updateUser: (state, action) => {
            let newUsers = [...state.users];
            const index = newUsers.findIndex((user) => {
                if (user.id === action.payload.id) {
                    return true;
                }
            });
            if (index !== -1) {
                newUsers[index] = action.payload;
            }

            state.users = newUsers;
        }
    }
});

// Action creators are generated for each case reducer function
export const {setUsers, updateUser} = userSlice.actions;

export default userSlice.reducer;