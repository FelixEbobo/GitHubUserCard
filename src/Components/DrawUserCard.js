import React, { useState } from 'react'
import "../static/css/draw-card-main.css"
import "../static/css/user-info.css"
import "../static/css/user-reps.css"
import PinnedIcon from "../static/svg/pinned.svg"
import RepIcon from '../static/svg/repository.svg'
import DrawRepCard from "./DrawRepCard"
// import {nextBtn, prevBtn, 
        // pinnedReps, pinnedRepsSlider} from "../static/js/ButtonSlider" 

const DrawUserCard = ({isLoading, searchResult,
                       userRepos}) => {

    let counter = 0;

    if (searchResult) {
        console.log(searchResult)
    }

    const handleSlider = event => {
        const pinnedRepsSlider = document.querySelector("#slider")
        const pinnedReps = document.querySelectorAll("#slider .rep")
        const size = pinnedReps[0].clientWidth + 16
        if (event.target.innerHTML === "Prev") {
            if (counter >= 1) {
                counter--
                pinnedRepsSlider.style.transform = "translateX(" +
                    (-size) * counter + "px)"
            }
            else {
                counter = pinnedReps.length - 3;
                pinnedRepsSlider.style.transform = "translateX(" +
                    (-size) * counter + "px)"
            }
        }
        if (event.target.innerHTML === "Next") {
            if (counter < pinnedReps.length - 3) {
                counter++
                pinnedRepsSlider.style.transform = "translateX(" +
                    (-size) * counter + "px)"
                console.log(pinnedRepsSlider.style.transform)
            }
            else {
                counter = 0;
                pinnedRepsSlider.style.transform = "translateX(" +
                    (-size) * counter + "px)"
            }
        }
    }

    const UserCard = () => {
        const {avatar_url, name, login, bio,
               company, location, email, blog,
               public_repos,} = searchResult
        return (<>
        <div className="user-card">
            <div className="user-info">
                <img src={avatar_url} />
                <div>
                    <h4>{name}</h4>
                    <h6>{login}</h6>
                    <p>{bio}</p>
                </div>
            </div>
            <div className="user-reps-info">
                <ul className="links">
                    
                </ul>
                <div className="orgs">
                    <p>Organizations</p>
                </div>
                <div className="reps">
                    <img src={PinnedIcon} alt="pinned" />
                    <p>000</p>
                </div>
                <div className="reps">
                    <img src={RepIcon} />
                    <p>{public_repos}</p>
                </div>
            </div>
        </div>
        {/* <div className="user-pin-reps">
            <div id="prevBtn" 
                 unselectable="on"
                 onClick={handleSlider}>Prev</div>
            <div id="slider">
                It's only a placeholder here
            </div>
            <div id="nextBtn"
                 unselectable="on"
                 onClick={handleSlider}>Next</div>
        </div> */}
        <div className="user-reps">
            {userRepos.map((userRep, index) => {
                const {id, name, 
                       language, description} = userRep
                return <DrawRepCard 
                            key={id}
                            name={name}
                            language={language}
                            description={description}/>
            })} 
        </div>
        </>)
    }

    return (
    <>
        {isLoading && <div className="spinner"/>}
        {searchResult && UserCard()}
    </>
    )
}

export default DrawUserCard
