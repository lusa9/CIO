import React from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

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

const Button = ({name, onClick}) => (
    <div className="h-full d-flex align-items-center button" onClick={onClick}>
        <h4 className="white">{name}</h4>
    </div>
)

export const Header = ({routeToPath}) => (
    <div className="h-100 d-flex">
        <div className="bg-white h-100" style={{display: "flex", flex: 1}} />
        <div className="content bg-accent d-flex justify-content-between">
            <img className="bg-white button" src={logo} style={{paddingRight: 40}} onClick={() => routeToPath("/")}/>
            <div className="d-flex">
                {buttons.map(button => ({name: button.name, onClick: () => routeToPath(button.path)})).map(Button).withSpace({width: 40})}
            </div>
        </div>
        <div className="bg-accent h-100" style={{display: "flex", flex: 1}}/>
    </div>
)
