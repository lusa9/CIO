import React from 'react'

const buttons = [
    "About Us",
    "Why OCIO?",
    "Our Services",
    "The Team",
    "Resources",
    "Contact Us",
]

const Button = (name) => (
    <div className="h-full white d-flex align-items-center">
        <div>{name}</div>
    </div>
)


export const Header = () => (
    <div className="h-100 bg-accent content-container">
        <div className="content d-flex justify-content-between">
            <div style={{width: 100, backgroundColor: "white"}}/>
            <div className="d-flex">
                {buttons.map(Button).withSpace({width: 40})}
            </div>
        </div>
    </div>
)
