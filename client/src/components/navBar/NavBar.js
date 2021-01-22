import React from 'react'
import './styles.css'

export default function NavBar() {

    return (

        <div className="row navBar">

            <div className="col-1">
                <h4 className="logo">ES-Hub</h4>
            </div>

            <div className="col-4 offset-3">
                <input className="search-input" placeholder="Search"></input>
            </div>

        </div>

    )

}
