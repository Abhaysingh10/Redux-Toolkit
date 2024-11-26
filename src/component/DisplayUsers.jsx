import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postReducer } from '../store/slices/postSlice'
import { axiosInstance } from '../axiosConfig/https'

function DisplayUsers() {
    const dispatch = useDispatch()
    const posts = useSelector((state) => {
        return state.posts
    })

    useEffect(() => {

        axiosInstance.get('/posts').then((response) => {
            dispatch(postReducer(response.data))
        })

        return () => {

        }
    })




    // console.log("Users", users);

    return (
        <div>
            <table>
                <thead><tr><td>name</td></tr></thead>
                <tbody>
                    {posts?.map((ele) => {
                        return <tr key={ele.id}><td>{ele.title}</td></tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayUsers