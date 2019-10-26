import React from 'react'

export const SectionHeader = ({name}) => (
    <div className="content-container margin-top-120">
        <div className="content">
            <h1 className="accent">{name}</h1>
        </div>
    </div>
)

export const PrevioustSectionHeader = ({name}) => (
    <div className="w-full margin-top-100 d-flex align-items-center " >
        <h1 className="accent">{name}</h1>
    </div>
)
