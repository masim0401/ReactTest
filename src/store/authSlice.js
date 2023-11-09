import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuthorized: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthorized = true;
        },
        logout: (state) => {
            state.isAuthorized = false;
        }
    }
});

// Action creators are generated for each case reducer function
export const {login, logout} = authSlice.actions;

export default authSlice.reducer;