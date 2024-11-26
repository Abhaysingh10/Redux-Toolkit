import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import userSlice from "./slices/userSlice";
import postSlice from "./slices/postSlice";
import loadingSlice from "../component/login/loginComponentReducer";
import tableReducer from "../EditableTable/tableSlice"
import secondTableReducer from "../ETSecondWay/secondSlice"
const reducers = combineReducers({
    users: userSlice.reducer,
    auth: loginSlice.reducer,
    posts: postSlice.reducer,
    table: tableReducer,  
    secondTable:secondTableReducer,
    loading: loadingSlice.reducer

});

// const persistedReducer = persistReducer(persistConfig, reducers)
export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

// export const store