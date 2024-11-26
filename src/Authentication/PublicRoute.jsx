import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Navigate } from 'react-router-dom'
import Dashboard from '../component/Dashboard'

const PublicRoute = ({ component: Component, restricted, ...rest }) => {

    const { isAuthenticated } = useSelector(state => state.user_info)

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated && restricted ? (<Navigate to='/dashboard' />) : (<Component {...props} />)
            }
        />
    )
}

export default PublicRoute