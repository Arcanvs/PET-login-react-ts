import { createSlice } from '@reduxjs/toolkit';
import { UserEmptyState } from '../../models/user.type';

export const userReducer = createSlice({
    name: 'user',
    initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : UserEmptyState,
    reducers: {
        createUser: (state, action) => {
            localStorage.setItem('user', JSON.stringify({ ...action.payload }));
            return action.payload;
        },
        modifyUser: (state, action) => {
            const parcialData = { ...state, ...action.payload };
            localStorage.setItem('user', JSON.stringify({ ...parcialData }));
            return parcialData;
        },
        resetUser: () => {
            localStorage.removeItem('user');
            return UserEmptyState;
        }
    }
});

export const { createUser, modifyUser, resetUser } = userReducer.actions;

export default userReducer.reducer;