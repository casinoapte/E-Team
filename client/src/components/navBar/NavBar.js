import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../../contexts/UserContext'
import Logo from '../../assets/logo/GU-logo-navbar.png'
import './styles.css'

export default function NavBar() {


    const { userData, setUserData } = useContext(UserContext)

    const history = useHistory()

    // Changing Pages //

    const homepage = () => {
        history.push("/")
    }

    const login = () => {
        history.push("/login")
    }

    const register = () => {
        history.push("/register")
    }

    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token", "")
        history.push("/")
    }


    return (

        <div className="row navBar">

            <div className="col-1">
                <img src={Logo} className="GU-logo-navbar" onClick={homepage} />
            </div>

            <div className="col-4 offset-3">
                <input className="search-input" placeholder="Search"></input>
            </div>



            {
                userData.user ?
                    (

                       
                        <div className="col-3 offset-1">
                            <button className="auth-btn logout-btn-navbar" onClick={logout}>Username</button>
                        </div>

                    ) : (
                        <div className="col-3 offset-1">
                        <button className="auth-btn login-btn-navbar" onClick={login}>Login</button>
                        <button className="auth-btn register-btn-navbar" onClick={register}>Register</button>
                    </div>
                    )}
        </div>

    )

}
