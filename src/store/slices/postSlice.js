import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        postReducer(state, action) {
            return state = action.payload
        }
    }
})

export default postSlice;
export const { postReducer } = postSlice.actions
