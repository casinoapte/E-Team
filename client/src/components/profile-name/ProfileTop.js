import React from 'react'
import ProfilePic from '../../assets/images/MyDoggo.jpg'
import './styles.css'

export default function ProfileTop() {
    return (
        <>
            <div className="row">
                <div className="col-9 top-div">

                    <div className="row">

                        <div className="col-3">
                            <img className="profile-pic" src={ProfilePic} />
                        </div>

                        <div className="col-4 offset-4">
                            <h1>Profile Info</h1>
                        </div>


                    </div>
                </div>
            </div>


        </>


    )
}
