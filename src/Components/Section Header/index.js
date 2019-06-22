import React from 'react'

export const SectionHeader = ({name}) => (
    <div className="w-full h-200 d-flex justify-content-center align-items-center bg-lightgray">
        <h2 className="bold accent">{name}</h2>
    </div>
)
