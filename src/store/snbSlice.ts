import { createSlice } from "@reduxjs/toolkit";

const snbSlice = createSlice({
    name:"snb",
    initialState: {
        isOpen: false,
    },
    reducers: {
       toggle (state, _actions) {
           state.isOpen = !state.isOpen;  
       } 
    }
});

export type SnbState = ReturnType<typeof snbSlice.getInitialState>

export const snbActions = snbSlice.actions;

export default snbSlice.reducer;
