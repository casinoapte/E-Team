import React from 'react'
import './styles.css'

export default function TopicBtns() {






    return (

        <div className="row topics">
            <div className="col-1 offset-10 topic-col">
                <h3 className="topic-title">Topics:</h3>

                <button className="topic-btn">#News</button>
                <button className="topic-btn">#Jobs</button>
                <button className="topic-btn">#Teams</button>
                <button className="topic-btn">#Meta</button>
                <button className="topic-btn">#Humor</button>
                <button className="topic-btn">#Random</button>

            </div>

        </div>

    )
}
