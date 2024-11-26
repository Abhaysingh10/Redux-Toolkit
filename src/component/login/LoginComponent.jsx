import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginReducer } from '../../store/slices/loginSlice'
import Table from 'react-bootstrap/Table';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { duration } from 'moment/moment';
import { formActions } from '../React Hook Form/formActions';

const LoginComponent = () => {

    // const [info, setInfo] = useState({
    //     username: "",
    //     password: ""
    // })

    const [usersDetails, setusersDetails] = useState({
        id: "",
        name: "",
        email: "",
        phone: ""
    })
    const [users, setusers] = useState([])

    // const dispatch = useDispatch()


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     // console.log("Clicked");
    //     dispatch(loginReducer(info))
    // }


    // const handleConnect = (e) => {
    //     e.preventDefault()
    //     axios.post('http://localhost:8080/post', {
    //         email: info.username,
    //         lastName: info.password
    //     }).then((res) => {
    //         console.log(res);
    //     })
    // }

    const dispatch = useDispatch()
    const submitUsersDetails = (e) => {
        const url = "http://localhost:8080/saveUsersDetails"
        axios.post(url, usersDetails).then(({ data }) => {
            // setusers(data)
        })

        dispatch(formActions)

    }

    const deleteUserDetails = (e) => {
        const url = "http://localhost:8080/deleteUserDetails"
        axios.post(url, { "id": usersDetails.id }).then((data) => {

        })
    }

    const handleInput = (e) => {
        setusersDetails({ ...usersDetails, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        console.log(usersDetails);
        return () => {

        }
    }, [usersDetails])

    const fetchUsers = () => {
        return axios.get("http://localhost:8080/getUsers").then(({ data }) => {
            return data
        }).catch((err) => {
            throw err
        })
    }

    const updateUserDetails = () => {
        axios.post("http://localhost:8080/updateUserDetails", { "id": usersDetails.id, "name": usersDetails.name }).then(({ data }) => {

        })
    }
    const { data, isLoading, isError } = useQuery('myData', fetchUsers);
    const { loading } = useSelector(state => state.loading)


    const handleLoader = () => {
        dispatch(formActions(loading))
    }
    return (<>

        {/* <div className='parent-div'>
            <form onSubmit={handleSubmit}>  
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input className='form-control' type="text" onChange={(e) => { setInfo({ ...info, "username": e.target.value }) }} /><br />
                    <label>Password</label>
                    <input className='form-control' type="password" onChange={(e) => { setInfo({ ...info, "password": e.target.value }) }} />
                    <br />
                    <button className='btn btn-primary' type='submit'>Submit</button>
                </div>
            </form>



            <form onSubmit={handleConnect}
                className="form">
                <button className='btn btn-danger my-2' type="submit ">Connected?</button>
            </form>
        </div> */}

        <div className='container flex'>
            <div className="row">
                <div className="col-sm">

                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className='users-div'>
                        <form className='my-5'>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Id</label>
                                <input type="email" className="form-control" placeholder="Id" name='id' onChange={handleInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Name</label>
                                <input type="text" className="form-control" placeholder="Name" name='name' onChange={handleInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Email</label>
                                <input type="email" className="form-control" placeholder="Email" name='email' onChange={handleInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Phone</label>
                                <input type="Number" className="form-control" placeholder="Phone" name='phone' onChange={handleInput} />
                            </div>
                        </form>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <button className="btn btn-primary" onClick={submitUsersDetails}>Submit</button>
                                </div>
                                <div className="col-sm">
                                    <button className="btn btn-danger " onClick={deleteUserDetails}>Delete</button>
                                </div>
                                <div className="col-sm">
                                    <button className="btn btn-warning " onClick={updateUserDetails}>Update</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="col-sm">


                    <button className='btn btn-warning' onClick={handleLoader}> Start Loader</button>
                    {loading ? <>
                        <div class="loader-container">
                            <div class="loader">
                                <div class="face face-front"></div>
                                <div class="face face-back"></div>
                                <div class="face face-top"></div>
                                <div class="face face-bottom"></div>
                                <div class="face face-left"></div>
                                <div class="face face-right"></div>
                            </div>
                        </div>

                    </> : <></>}
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th> Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {data?.map((ele, index) => {
                                return (<tr key={index}>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.phone}</td>
                                </tr>)
                            })} */}

                        </tbody>
                    </Table>
                </div>

            </div>
        </div>

    </>
    )
}

export default LoginComponent
