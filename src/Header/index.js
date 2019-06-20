import React from 'react';
import logo from '../assets/logo.svg'

const buttons = [
    {
        name: "About Us",
        path: "/about"
    },
    {
        name: "Why OCIO?",
        path: "/why"
    },
    {
        name: "Our Services",
        path: "/services"
    },
    {
        name: "The Team",
        path: "/team"
    },
    {
        name: "Resources",
        path: "/resources"
    },
    {
        name: "Contact Us",
        path: "/contact"
    }
]

const Button = ({name}) => (
    <div className="h-full d-flex align-items-center">
        <h4 className="white">{name}</h4>
    </div>
)


export const Header = () => (
    <div className="h-100 d-flex">
        <div className="bg-white h-100" style={{display: "flex", flex: 1}}/>
        <div className="content bg-accent d-flex justify-content-between">
            <img className="bg-white" src={logo} style={{paddingRight: 40}}/>
            <div className="d-flex">
                {buttons.map(Button).withSpace({width: 40})}
            </div>
        </div>
        <div className="bg-accent h-100" style={{display: "flex", flex: 1}}/>
    </div>
)
