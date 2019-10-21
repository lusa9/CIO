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
        <h4 className="white">{name}</h4>
    </div>
)

export const Header = ({routeToPath}) => (
    <div className="h-100 d-flex">
        <div className="bg-white h-100" style={{display: "flex", flex: 1, paddingLeft: 80}} />
        <div className="content bg-accent d-flex justify-content-between" style={{paddingRight: 80}}>
            <div className="d-flex align-items-center h-full bg-white padding-right-20">
                <img className="button" src={logo} style={{width: 185, height: 68}} onClick={() => routeToPath("/")}/>
            </div>
            <div className="d-flex">
                {buttons.map(button => ({name: button.name, onClick: () => routeToPath(button.path)})).map(Button).withSpace({width: 40})}
            </div>
        </div>
        <div className="bg-accent h-100" style={{display: "flex", flex: 1}}/>
    </div>
)
