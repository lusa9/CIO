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

export class Header extends React.Component {
    state = {
        expandedButtons: false
    }

    onMenuButtonClick = () => {
        this.setState(previousState => {
            return {expandedButtons: !previousState.expandedButtons}
        })
    }

    routeToPath = path => {
        const {routeToPath} = this.props
        
        routeToPath(path)
        this.setState({expandedButtons: false})
    }

    render() {
        const {expandedButtons} = this.state
        const {onMenuButtonClick, routeToPath} = this
        return (
            <div className="bg-accent-light" style={{position: "fixed", width: "100vw"}}>
                <div className="content-container">
                    <div className="content d-flex flex-direction-column">
                        <div className="d-flex justify-content-between h-100">
                            <div className="d-flex align-items-center h-full">
                                <img className="button" src={logo} style={{width: 185, height: 68}} onClick={() => routeToPath("/")} alt="logo"/>
                            </div>
                            <div className='h-full'>
                                <div className="navigation-buttons h-full">
                                    {buttons.map(button => ({name: button.name, onClick: () => routeToPath(button.path)})).map(Button).withSpace({width: 40})}
                                </div>
                                <div className='menu-button h-full d-flex align-items-center' style={{cursor: "pointer"}} onClick={onMenuButtonClick}>
                                    <Menu />
                                </div>
                            </div>
                        </div>
                        {
                            expandedButtons ? (
                                <div className='expanded-buttons margin-bottom-20'>
                                    {buttons.map(button => ({name: button.name, onClick: () => routeToPath(button.path)})).map(Button).map(button => <div style={{height: 43}}>{button}</div>)}
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const Menu = () => (
    <svg width="18px" height="12px" viewBox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <path d="M3,18 L21,18 L21,16 L3,16 L3,18 Z M3,13 L21,13 L21,11 L3,11 L3,13 Z M3,6 L3,8 L21,8 L21,6 L3,6 Z" id="path-menu"></path>
        </defs>
        <g id="icon-/-material-design-/-maps,-navigation,-notification" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="icon-/-material-design-/-navigation-/-ic_menu_24px" transform="translate(-3.000000, -6.000000)">
                <mask id="mask-2" fill="white">
                    <use xlinkHref="#path-menu"></use>
                </mask>
                <use id="Shape" className="accent-fill" xlinkHref="#path-menu"></use>
            </g>
        </g>
    </svg>
)
