import React from 'react'

export const SectionHeader = ({name}) => (
    <div className="content-container margin-top-120">
        <div className="content d-flex justify-content-center">
            <h2>{name}</h2>
        </div>
    </div>
)

export const PrevioustSectionHeader = ({name}) => (
    <div className="w-full margin-top-100 d-flex align-items-center " >
        <h2>{name}</h2>
    </div>
)
