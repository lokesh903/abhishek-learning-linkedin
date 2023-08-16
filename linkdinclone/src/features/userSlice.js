//rxslice - setting up redux
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    // We need a dispatch, an action to change the user.
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user += null;
        },
    },
});

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;