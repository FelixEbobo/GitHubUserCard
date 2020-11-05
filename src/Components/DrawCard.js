import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import "../static/css/draw-card-main.css"

const DrawCard = ({isLoading}) => {
    
    return (
    <>
        {isLoading && <div className="spinner"/>}
    </>
    )
}

export default DrawCard
