import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import "../static/css/draw-card-main.css"

const DrawCard = ({isLoading}) => {

    useEffect(() => {
        if (isLoading) {
            console.log("I'm on")
        } else {
            console.log("I'm off")
        }
    }, [isLoading])
    
    return (
    <>
        {isLoading && <div className="spinner"/>}
    </>
    )
}

export default DrawCard
