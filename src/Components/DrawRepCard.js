import React from 'react'
import "../static/css/user-reps.css"

const DrawRepCard = () => {
    return (
        <div className="rep">
            <a href="#">Title</a>
            <p>
                <span className="circle" />
                jupyter notebook
            </p>
            <p>
                <span>stars</span>
                <span>forks</span>
            </p>
            <p className="description">The Repository for the FirstTimersOnly movement in Open Source. We want projects to reserve some issues for newbies.</p>
        </div>
    )
}

export default DrawRepCard
