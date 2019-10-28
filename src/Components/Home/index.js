import React from 'react';
import home from '../../assets/home.jpg'
import logo from '../../assets/logo.svg'

export const Home = () => (
    <div className="d-flex justify-content-center align-items-center flex-1" style={{backgroundImage: `url(${home})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="d-flex flex-direction-column align-items-center home-message-container bg-accent-light" style={{backgroundColor: "rgba(255, 255, 255, 0.8)", maxWidth: 889, width: "100%"}}>
            <div className="content-container">
                <div className="content d-flex flex-direction-column align-items-center">
                    <img src={logo} className="margin-top-60" style={{maxWidth: 527, width: "100%"}} alt="logo"/>
                    <h3 className="margin-top-30 accent margin-bottom-50 text-center">Your investment office starts here.</h3>
                </div>
            </div>
        </div>
    </div>
)
