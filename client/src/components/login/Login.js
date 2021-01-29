import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import axios from 'axios'

import './styles.css'


export default function Login() {

    const history = useHistory()


    const [email, setEmail] = useState();

    const [username, setUsername] = useState();

    const [password, setPassword] = useState();

    const { setUserData } = useContext(UserContext);

    const register = () => {
        history.push("/register")
    }

    const submit = async (e) => {
        e.preventDefault()

        const loginUser = { email, password }

        const loginResponse = await axios.post
            (
                "http://localhost:5000/auth/userRoutes/login",
                loginUser
            )
        setUserData({
            token: loginResponse.data.token,
            user: loginResponse.data.user,
        })
        localStorage.setItem("auth-token", loginResponse.data.token)

        history.push("/")
    };

    return (

        <div className="row">
            <div className="col-3 offset-5">

                <form className="login-form" onSubmit={submit}>

                    <input type="email" className="email-input" placeholder="Email or Username" onChange={(e) => setEmail(e.target.value)}></input>

                    <input type="password" className="password-input" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input><br></br>

                    <input type="submit" value="Log In" className="login-btn" />

                    <a href="/register" className="forgot-password-link">Forgot Password?</a>


                    <div className="login-form-line" />


                    <button type="submit" className="create-account-btn" onClick={register}>Create New Account</button>

                </form>


            </div>

        </div>

    )
}
