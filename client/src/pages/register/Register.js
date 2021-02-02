import React from 'react'
import Logo from '../../assets/logo/GU-remote.png'
import RegisterComponent from '../../components/register/RegisterComponent'
import './styles.css'

export default function Register() {
    return (

        <div className="container">

            {/* Logo Row  */}

            <div className="row">

                <div className="col-1 offset-2">
                    <img src={Logo} className="GU-logo-register" />
                </div>

                <div className="col-7">
                    <h1 id="GU-text-register">Gamers United</h1>
                </div>

            </div>

            {/* Text Under Logo  */}

            <div className="row">

                <div className="col-11 offset-1">
                    <h4 id="GU-under-text-register">Join now & connect with millions of other players, coaches, and teams.  </h4>
                </div>

            </div>

            <div className="row">

                <div className="col-1">
                    <RegisterComponent/>  
                </div>

            </div>







        </div>
    )


}
