import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            // console.log(action.payload);
            state.push(action.payload)
        },
        removeUser(state, action) {
            state.pop()

        },
        clearAllUsers(state, action) {
            return []
        }
    }
})

export default userSlice
export const { addUser, removeUser, clearAllUsers } = userSlice.actions
