import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./UserSlice"

export const store = configureStore({
    reducer:{
        usersSlice: userReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>