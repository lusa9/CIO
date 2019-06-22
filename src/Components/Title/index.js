import React from 'react'

export const Title = ({text, className}) => (
    <div className={`d-flex align-items-center ${className}`}>
        <div className="line"/>
        <h3 className="margin-horizontal-40 nowrap bold dark">{text}</h3>
        <div className="line"/>
    </div>
)
