import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import styled from 'styled-components'
import './styles2.css';

export default function Test() {

    const [post, setPost] = useState({
        title: "",
        body: "",
        image: ""
    })

    const [page, setPage] = useState([])

    useEffect(() => {
        retrievePost()
    }, [])

    const handleInputChange = (e) => {
        e.preventDefault()
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const addPost = (e) => {
        e.preventDefault()
        setPost({ ...post, title: "", body: "", image: "" })
        API.addPost(post)
        retrievePost()
    }

    const retrievePost = () => {
        API.getPost()
            .then(res => {
                setPage(res.data.reverse())
            })
    }

    const SubmitButton = styled.button`
    margin-top: 100px;
    background-color: pink;
    border-radius: 25px;
    transition-duration: .5s;
    :hover {
    background-color: #9FFFCB;
    }
    `;

    return (
        <div className="container">

            <div className="row">
                <div className="col-4 offset-4">
                    <form className="input-form">
                        <h2 className="input-title">Title:</h2>
                        <input type='text' name='title' value={post.title} onChange={handleInputChange}></input>

                        <h2 className="input-title">Description:</h2>
                        <input type='text' name='body' value={post.body} onChange={handleInputChange}></input>

                        <h2 className="input-title">Image:</h2>
                        <input type='text' name='image' value={post.image} onChange={handleInputChange}></input><br></br>

                        <SubmitButton className="submit-btn" type="submit" onClick={addPost}>Submit</SubmitButton>
                    </form>
                </div>
            </div>

            {page.map(post => (

                <div className="row display-row">
                    <div className="col-12 offset-1 display">
                        <h5>Title: {post.title}</h5>

                        <h5>Body: {post.body}</h5>

                        <img src={post.image} alt=""/>
                    </div>
                </div>

            ))}

        </div>
    )
}
