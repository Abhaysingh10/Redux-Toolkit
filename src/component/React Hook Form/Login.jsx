import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Select from "react-select";
import axios from 'axios';
import moment from 'moment/moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Followers from '../../JSON/followers_and_following/followers_1.json'
import InitalFollowers from '../../JSON/followers_and_following_initial/followers_1.json'
// import {yupResolver} from '@h'
import * as Yup from 'yup'
// import { axiosInstance } from '../../axiosConfig/https';

function Login() {


    const [initialFollowers, setinitialFollowers] = useState([])
    const [finalFollowers, setfinalFollowers] = useState([])
    const [intersection, setintersection] = useState([])


    useEffect(() => {

        let arr = []

        InitalFollowers.map((ele) => {
            ele.string_list_data.map((item) => {
                let obj
                obj = item.timestamp + " " + item.value
                arr.push(obj)
            })
        })

        setinitialFollowers(arr)


        let arr1 = []

        Followers.map((ele) => {
            ele.string_list_data.map((item) => {
                let obj
                obj =item.timestamp + " " + item.value
                arr1.push(obj)
            })
        })

        setfinalFollowers(arr1)




    }, [])

    useEffect(() => {
        // console.log("Initial Followers", initialFollowers.length, finalFollowers.length);
    }, [initialFollowers])
    useEffect(() => {
        // console.log("intersection", intersection);
    }, [intersection])

    useEffect(() => {
        let difference;
        if (initialFollowers.length != 0 && finalFollowers.length != 0) {
            difference = initialFollowers.filter(x => !finalFollowers.includes(x));
            console.log(difference.length);
        }

        setintersection(difference)

    }, [finalFollowers])








    const validationScheme = Yup.object().shape({
        startDate: Yup.string()
            .required("Date of birth is required")
            .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD')
    })

    const preLoadedData = {
        username: "abhay_123",
        email: "abhay.singh@email.com",
        channel: "Youtube",
        country: { value: "Barbados", label: "Barbados" },
        startDate: "04/21/2023",
        endDate: "04/21/2023"

    }

    const [countryList, setcountryList] = useState([])
    const [startDate, setstartDate] = useState(new Date())

    const fetchCountry = () => {
        axios.get("https://restcountries.com/v3.1/all").then((response) => {
            setcountryList(response.data)
        })
    }

    useEffect(() => {
        fetchCountry()
        // let intersection = arr1.filter(x => arr2.includes(x));
    }, [])

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: preLoadedData
    });




    const onSubmit = (data) => { console.log(data) }

    return (
        <div className='my-5' style={{ width: "400px", margin: "auto" }}>
            {/* <form className='form-group flex' onSubmit={handleSubmit(onSubmit)}>
                <label className='d-flex' htmlFor="username">Username</label>
                <input className='form-control' type="text" id="username" {...register("username", { required: true })} />
                {errors.username ? <span style={{ color: "red" }}>Username Required</span> : <></>}<br />

                <label className='d-flex' htmlFor="email">Email</label>
                <input className='form-control' type="email" id="email" {...register("email")} /><br />

                <label className='d-flex' htmlFor="channel">Channel</label>
                <input className="form-control" type="text" id="channel" {...register("channel", { required: true })} />
                {errors.channel ? <span style={{ color: "red" }}>Email Required</span> : <></>} <br />

                <label className='d-flex' htmlFor="channel">Country</label>
                <Controller
                    control={control}
                    name='country'
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => {
                        return <Select
                            name='country'
                            defaultValue={preLoadedData.country}
                            onChange={onChange}
                            options={countryList.map((ele) => { return { value: ele.name.official, label: ele.name.official } })} />

                    }}
                />
                {errors.country ? <span style={{ color: "red" }}>Country Required</span> : <></>} <br />

                <label className='d-flex' htmlFor="channel">Start Date</label>
                <Controller
                    name='startDate'
                    control={control}
                    rules={{ required: true }}

                    render={({ field }) => {
                        return <DatePicker
                            minDate={new Date(field.value)}
                            selected={new Date(field.value)}
                            locale='es'
                            onChange={(date) => {
                                console.log("Date", date);

                                if (date !== null) {
                                    field.onChange(moment(date).format('DD/MM/YYYY'))
                                    setstartDate(moment(date).format('DD/MM/YYYY'))
                                    console.log(moment(date).format('DD/MM/YYYY'))
                                }

                            }} />
                    }} />
                {errors.startDate ? <span style={{ color: "red" }}>Start Date Required</span> : <></>} <br />

                <label className='d-flex' htmlFor="channel">End Date</label>
                <Controller name='endDate'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => {
                        return <DatePicker
                            minDate={new Date(field.value)}
                            selected={new Date(field.value)}
                            locale='es'
                            dateFormat='dd/MM/yyyy'
                            onChange={(date) => {
                                field.onChange(moment(date).format('DD/MM/YYYY'))
                                setstartDate(moment(date).format('DD/MM/YYYY'))
                                console.log(moment(date).format('DD/MM/YYYY'))
                            }} />
                    }} />
                {errors.endDate ? <span style={{ color: "red" }}>End-Date Required</span> : <></>} <br /><br /><br />



                <button className='btn btn-warning' type="submit">Submit</button>
            </form> */}

            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                {intersection?.map((ele) => {
                    return <tr>
                        <td>{ele}</td>
                    </tr>
                })}
            </table>

        </div>
    )
}

export default Login