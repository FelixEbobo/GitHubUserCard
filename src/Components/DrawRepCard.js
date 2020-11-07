import React from 'react'
import "../static/css/user-reps.css"
import Colors from "../static/css/colors.json"

const DrawRepCard = ({name, language, description}) => {
    return (
        <div className="rep">
            <a href="#">{name}</a>
            {language && <p>
                <span 
                    className="circle" 
                    style={{backgroundColor: Colors[language]}}/>
                {language}
            </p>}
            <p>
                <span>stars</span>
                <span>forks</span>
            </p>
            <p className="description">{description}</p>
        </div>
    )
}

export default DrawRepCard
