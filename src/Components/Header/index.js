import React from 'react';
import logo from '../../assets/logo.svg'

const buttons = [
    {
        name: "About",
        path: "/about"
    },
    {
        name: "OCIO",
        path: "/ocio"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Team",
        path: "/team"
    },
    {
        name: "Resources",
        path: "/resources"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]

const Button = ({name, onClick}) => (
    <div className="h-full d-flex align-items-center button" onClick={onClick} key={name}>
        <h4 className="accent">{name}</h4>
    </div>
)

export const Header = ({routeToPath}) => (
    <div className="h-100 bg-accent-light content-container">
        <div className="content d-flex justify-content-between">
            <div className="d-flex align-items-center h-full">
                <img className="button" src={logo} style={{width: 185, height: 68}} onClick={() => routeToPath("/")}/>
            </div>
            <div className="navigation-buttons">
                {buttons.map(button => ({name: button.name, onClick: () => routeToPath(button.path)})).map(Button).withSpace({width: 40})}
            </div>
        </div>
    </div>
)

export const PreviousHeader = ({routeToPath}) => (
    <div className="h-100 d-flex content-container bg-accent-light w-full" style={{position: "fixed", zIndex: 1}}>
        <div className="content d-flex justify-content-between">
            <div className="d-flex align-items-center h-full">
                <img className="button" src={logo} style={{width: 185, height: 68}} onClick={() => routeToPath("/")}/>
            </div>
            <div className="navigation-buttons">
                {buttons.map(button => ({name: button.name, onClick: () => routeToPath(button.path)})).map(Button).withSpace({width: 40})}
            </div>
        </div>
    </div>
)
