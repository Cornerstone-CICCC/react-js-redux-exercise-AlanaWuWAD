import { useDispatch, useSelector } from "react-redux"
import {incrementAge, setAge, setFirstname, setLastname, type UserType} from "./UserSlice"
import {type  RootState, type AppDispatch } from "./store"

const User = () => {
    const firstname = useSelector((state: RootState)=>state.usersSlice.firstname)
    const lastname = useSelector((state:RootState)=>state.usersSlice.lastname)
    const age = useSelector((state:RootState)=>state.usersSlice.age)
    const dispatch = useDispatch<AppDispatch>() //initial dispatch

  return (
    <div>
        <p>Input your name</p>
        <input type="text" value={firstname} onChange={(e)=>dispatch(setFirstname(e.target.value))} placeholder="firstname" />
        <input type="text" value={lastname} onChange={(e)=>dispatch(setLastname(e.target.value))} placeholder="lastname"/>
        <input type="number" value={age} onChange={(e)=>dispatch(setAge(e.target.value))} placeholder="age"/>

        <h3>Name: {firstname} {lastname}</h3>
        <h3>Age: {age}</h3> <button onClick={()=>dispatch(incrementAge())}>Increment Age</button>
    </div>
  )
}

export default User