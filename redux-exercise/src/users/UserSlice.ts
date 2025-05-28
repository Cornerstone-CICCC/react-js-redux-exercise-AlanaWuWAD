import {createSlice} from "@reduxjs/toolkit";

export type UserType = {
    firstname: string,
    lastname: string,
    age: number
}

const initialState:UserType = {
    firstname: "john",
    lastname: "Yo",
    age: 33
}

export const UserSlice = createSlice({
    name: "usersSlice",
    initialState,
    reducers:{
        incrementAge:(state)  => {
            state.age += 1
        },
        setFirstname:(state, action) => {
            state.firstname = action.payload
        },
        setLastname:(state, action) => {
            state.lastname = action.payload
        },
        setAge:(state, action) =>{
            state.age = action.payload
        }
    }
})

export const {incrementAge, setFirstname, setLastname,setAge} = UserSlice.actions
export default UserSlice.reducer