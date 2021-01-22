import React, { useState } from 'react'
import API from '../../utils/API'
import './styles.css'

// Images //

import CSGO from '../../assets/logos/CSGO.jpg'
import Dota from '../../assets/logos/Dota.jpg'
import LOL from '../../assets/logos/LOL.png'
import Fortnite from '../../assets/logos/Fortnite.jpg'
import Starcraft from '../../assets/logos/Starcraft.png'
import ProfileIMG from '../../assets/images/MyDoggo.jpg'
import CoverIMG from '../../assets/images/Whale.jpg'


export default function CreatePost() {

    const [post, setPost] = useState({
        title: "",
        body: "",
        topics: []
    })

    const toggleTopic = (e) => {
        e.preventDefault()
        // setPost({ ...post.topics, [e.target.name]: e.target.value })
        console.log(post.topics);
    }

    const handleInputChange = (e) => {
        e.preventDefault()
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const createPost = (e) => {
        e.preventDefault()
        setPost({ ...post, title: "", body: "" })
        API.addPost(post)
    }

    const createDraft = (e) => {
        e.preventDefault()
        setPost({ ...post, title: "", body: "" })
        API.addDraft(post)
    }

    return (
        <>
            <form>

                <div className="row">

                    <div className="col-3 offset-2">
                        <h5 className="post-body-title">Create A Post:</h5>
                    </div>

                    <div className="col-3 offset-1 profile-box">

                        <div className="row cover-img">
                            <img className="profile-img" src={ProfileIMG}></img>
                            <div className="profile-border"></div>
                            <div className="underline"></div>
                        </div>

                        <div className="row">
                            <div className="col-3">
                                <h5 className="profile-username">Username:</h5>
                            </div>
                            <div className="col-1 offset-1">
                                <h5 className="profile-username"></h5>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="row">
                    <div className="col-6 offset-2">
                        <h5 className="post-title-underline">____________________________________________________________________________________________</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 offset-2">
                        <select className="dropdown">Game:
                       <option>*Username*</option>
                            <option>CSGO</option>
                            <option>Dota</option>
                            <option>LOL</option>
                            <option>Fortnite</option>
                            <option>Starcraft</option>


                        </select>
                    </div>
                </div>

                <div className="row">

                    <div className="col-6 offset-2 post-box">

                        <input className="post-title" placeholder="Title" type="text" name="title" maxLength={200} value={post.title} onChange={handleInputChange}></input>

                    </div>

                    {/* Button & Body Row */}

                    <div className="button-row">

                        <div className="col-12">

                            <button className="bold-btn post-body-btn">B</button>
                            <button className="italics-btn post-body-btn">I</button>
                            <button className="underline-btn post-body-btn">U</button>
                            <button className="list-btn post-body-btn">•</button>

                        </div>

                        <div className="row">

                            <div className="col-12">

                                <textarea className="post-body" type="text" name="body" placeholder="Text (Optional)" value={post.body} onChange={handleInputChange}></textarea>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Topic Button & Post Button Row  */}

                <div className="row">

                    <div className="col-12 topic-btn-row">

                        <button className="post-topic-btn" onClick={toggleTopic} value={"news"} name="topics"># News</button>
                        <button className="post-topic-btn" onClick={toggleTopic} value={"jobs"} name="topics"># Jobs</button>
                        <button className="post-topic-btn" onClick={toggleTopic} value={"teams"} name="topics"># Teams</button>
                        <button className="post-topic-btn" onClick={toggleTopic} value={"humor"} name="topics"># Humor</button>
                        <button className="draft-btn" onClick={createDraft} name="posted" value={false}>Save Draft</button>

                        <button className="post-btn" onClick={createPost} name="posted" value={true}>Post</button>

                    </div>

                </div>
            </form>

        </>
    )
}
