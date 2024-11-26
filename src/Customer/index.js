import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useState } from 'react';
import axios from 'axios';
import { green } from '@mui/material/colors';

const Index = () => {

    const [columnd,] = useState(
        [
            { field: "id", editable: true }, { field: "name" }, { field: "email" }, { field: "phone" },
            { field: "gender" }, { field: "address" }, { field: "country" }, { field: "cars" }, { field: "amount" }
        ])
    const [row, setrow] = useState([])


    useEffect(() => {
        console.log("Called");
        axios.get('http://localhost:8080/getCustomers').then(({ data }) => {
            console.log(data);
            setrow(data);
        })
    }, [])
    console.log("rows", row);

    const [searchElement, setsearchElement] = useState({})

    const fetchData = (data) => {
        axios.post("http://localhost:8080/search", { data }).then(({ data }) => {
            setrow(data)
        })
    }

    useEffect(() => {
        if (Object.keys(searchElement).length != 0) {
            // getAllCustomers()
            const getData = setTimeout(() => {
                fetchData(searchElement);
            }, 1500);
            return () => {
                clearTimeout(getData)
            }
        } else {
            axios.get('http://localhost:8080/getCustomers').then(({ data }) => {
                console.log(data);
                setrow(data);
            })
        }

    }, [searchElement])

    return (
        <>
            <table>
                <tr>
                    <td className='col'><input className='input-box' name='id' type='text' onChange={(e) => {
                        setsearchElement({ ...searchElement, [e.target.name]: e.target.value });
                        if (e.target.value.length == 0) {
                            const { [e.target.name]: deletedProp, ...newObj } = searchElement;
                            setsearchElement(newObj);
                        }
                    }} placeholder='id' /></td>
                    <td className='col'><input className='input-box' name='name' type='text' onChange={(e) => {
                        setsearchElement({ ...searchElement, [e.target.name]: e.target.value });
                        if (e.target.value.length == 0) {
                            const { [e.target.name]: deletedProp, ...newObj } = searchElement;
                            setsearchElement(newObj);
                        }
                    }} placeholder='name' /></td>
                    <td className='col'><input className='input-box' name='email' type='text' onChange={(e) => {
                        setsearchElement({ ...searchElement, [e.target.name]: e.target.value });
                        if (e.target.value.length == 0) {
                            const { [e.target.name]: deletedProp, ...newObj } = searchElement;
                            setsearchElement(newObj);
                        }
                    }} placeholder='email' /></td>
                    <td className='col'><input className='input-box' name='phone' type='text' onChange={(e) => {
                        setsearchElement({ ...searchElement, [e.target.name]: e.target.value });
                        if (e.target.value.length == 0) {
                            const { [e.target.name]: deletedProp, ...newObj } = searchElement;
                            setsearchElement(newObj);
                        }
                    }} placeholder='phone' /></td>
                    <td className='col'><input className='input-box' name='gender' type='text' onChange={(e) => {
                        setsearchElement({ ...searchElement, [e.target.name]: e.target.value });
                        if (e.target.value.length == 0) {
                            const { [e.target.name]: deletedProp, ...newObj } = searchElement;
                            setsearchElement(newObj);
                        }
                    }} placeholder='gender' /></td>
                    <td className='col'><input className='input-box' name='address' type='text' onChange={(e) => {
                        setsearchElement({ ...searchElement, [e.target.name]: e.target.value });
                        if (e.target.value.length == 0) {
                            const { [e.target.name]: deletedProp, ...newObj } = searchElement;
                            setsearchElement(newObj);
                        }
                    }} placeholder='address' /></td>
                    <td className='col'><input className='input-box' name='country' type='text' onChange={(e) => {
                        setsearchElement({ ...searchElement, [e.target.name]: e.target.value });
                        if (e.target.value.length == 0) {
                            const { [e.target.name]: deletedProp, ...newObj } = searchElement;
                            setsearchElement(newObj);
                        }
                    }} placeholder='country' /></td>
                    <td className='col'><input className='input-box' name='cars' type='text' onChange={(e) => {
                        setsearchElement({ ...searchElement, [e.target.name]: e.target.value });
                        if (e.target.value.length == 0) {
                            const { [e.target.name]: deletedProp, ...newObj } = searchElement;
                            setsearchElement(newObj);
                        }
                    }} placeholder='cars' /></td>
                    <td className='col'><input className='input-box' name='amount' type='text' onChange={(e) => {
                        setsearchElement({ ...searchElement, [e.target.name]: e.target.value });
                        if (e.target.value.length == 0) {
                            const { [e.target.name]: deletedProp, ...newObj } = searchElement;
                            setsearchElement(newObj);
                        }
                    }} placeholder='amount' /></td>
                </tr>
            </table>
            <div style={{ height: 800, width: '100%' }}>
                <DataGrid columns={columnd} rows={row} />
            </div>
        </>
    )
}

export default Index
