import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useSelector(state => state.user_info)
    

    return (
        <Route {...rest}
            render={(props) => {
                isAuthenticated ? (
                    <Component {...props} />
                ) : (<Navigate to='/login'/>)
            }}
        />
    )
}

export default PrivateRoute