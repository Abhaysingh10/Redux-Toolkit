import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false
}

const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoader: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const { setLoader } = loadingSlice.actions
export default loadingSlice