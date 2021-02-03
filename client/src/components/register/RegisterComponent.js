import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../../contexts/UserContext'
import axios from 'axios'
import './styles.css'

export default function Register() {

    const [email, setEmail] = useState();

    const [username, setUsername] = useState();

    const [password, setPassword] = useState();

    const [passwordCheck, setPasswordCheck] = useState();

    const { setUserData } = useContext(UserContext);

    const history = useHistory()

    const submit = async (e) => {
        e.preventDefault()
        const newUser = { email, username, password, passwordCheck }
        await axios.post
            (
                "http://localhost:5000/auth/userRoutes/register",
                newUser
            )
        const loginResponse = await axios.post
            (
                "http://localhost:5000/auth/userRoutes/login",
                {
                    email,
                    password
                }
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
            <div className="col-3">

                <form className="login-form-register" onSubmit={submit}>

                    <input type="email" className="register-form-input" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input><br></br>

                    <input type="username" className="register-form-input"  placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input><br></br>

                    <input type="password" className="register-form-input"  placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input><br></br>

                    <input type="password" className="register-form-input"  placeholder="Confirm Password" onChange={(e) => setPasswordCheck(e.target.value)}></input><br></br>

                    <input type="submit" value="Register" className="register-form-submit" />

                </form>

            </div>

        </div>
    )
}
