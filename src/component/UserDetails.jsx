import React from 'react'
import { fakeData } from '../api'
import { useDispatch } from 'react-redux';
import { addUser, clearAllUsers, removeUser } from '../store/slices/userSlice';
function UserDetails() {

    const dispatch = useDispatch()

    const addNewUser = (payload) => {
        // console.log(payload);
        dispatch(addUser(payload))
    }

    return (
        <div>

            <button onClick={() => addNewUser(fakeData())}>Add new user</button>
            <button onClick={() => dispatch(removeUser())}>Remove last user</button>
            <button onClick={() => dispatch(clearAllUsers())}>Clear list</button>

        </div>
    )
}

export default UserDetails