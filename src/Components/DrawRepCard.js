import React from 'react'
import "../static/css/user-reps.css"
import Colors from "../static/css/colors.json"

const DrawRepCard = ({name, language, description,
                      html_url, url, primaryLanguage}) => {
    language = language || primaryLanguage.name
    return (
        <div className="rep">
            <a href={html_url || url}>{name}</a>
            {language && <p>
                <span 
                    className="circle" 
                    style={{backgroundColor: Colors[language]}}/>
                {language || primaryLanguage.name}
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
