import React from 'react'
import './styles.css'
import LoginComponent from '../../components/login/LoginComponent'
import Logo from '../../assets/logo/GU-remote.png'


export default function Login() {

    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="col-1">
                        <img src={Logo} className="GU-logo-login" />
                    </div>

                    <div className="col-7">
                        <h1 id="gu-text-login">Gamers United</h1>
                    </div>


                    <LoginComponent />

                </div>

                <div className="row">

                    <div className="col-7">

                        <h3 id="GU-under-text">Connecting passionate gamers with schools, teams, and leagues all around the world.</h3>

                    </div>

                </div>
            </div>

        </>
    )
}
