import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name: "login",
    initialState: {
        username: "",
        password: ""
    },
    reducers: {
        loginReducer(state, action) {

            // state = {...state, [;]}
            console.log(action.payload);
            // console.log("state.username", state.username);
            // console.log("state.password", state.password);


        }
    }
})

export default loginSlice;
export const { loginReducer } = loginSlice.actions