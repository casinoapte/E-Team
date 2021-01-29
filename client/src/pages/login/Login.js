import React from 'react'
import './styles.css'
import LoginComponent from '../../components/login/Login'
import Logo from '../../assets/logo/GU-remote.png'
import LogoText from '../../assets/logo/GU-text.png'



export default function Login() {

    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="col-1">
                        <img src={Logo} className="GU-logo" />
                    </div>

                    <div className="col-4 offset-1">

                        <img src={LogoText} className="GU-text" />
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
