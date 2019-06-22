import React from 'react';
import home from '../../assets/home.jpg'
import logo from '../../assets/logo.svg'

export const Home = () => (
    <div className="d-flex justify-content-center align-items-center flex-1" style={{backgroundImage: `url(${home})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="d-flex flex-direction-column align-items-center" style={{backgroundColor: "rgba(255, 255, 255, 0.8)", width: 889, height: 341}}>
            <img src={logo} height={173} width={343} className="margin-top-60"/>
            <h2 className="margin-top-30 accent">Your investment office starts here.</h2>
        </div>
    </div>
)
