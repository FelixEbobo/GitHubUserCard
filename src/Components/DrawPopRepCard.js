import React from 'react'
import DrawRepCard from './DrawRepCard'

const DrawPopRep = ({handleSlider, pinnedReps}) => {

    return (
        pinnedReps.length > 0 ?
        <div className="user-pin-reps">
            <div id="prevBtn"
                unselectable="on"
                onClick={handleSlider}
            >Prev</div>
            <div id="slider">
                {pinnedReps.map((rep, index) => {
                console.log(rep.node)
                return <DrawRepCard {...rep.node} key={index}/>})}
            </div>
            <div id="nextBtn"
                unselectable="on"
                onClick={handleSlider}
            >Next</div>
        </div>
        : <></>
    )
}

export default DrawPopRep;