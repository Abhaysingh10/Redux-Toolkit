import React from 'react'

export const LoginWithAuth = () => {
    return (
        <div>
            <div class="container">
                <form class="login-form">
                    <h1 style={{fontFamily:"sans-serif"}}>A-one Shop</h1>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
