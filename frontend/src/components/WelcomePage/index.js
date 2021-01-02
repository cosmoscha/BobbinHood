import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import {NavLink} from "react-router-dom"
import './welcome.css'

const WelcomePage = () => {

    return (
        <>
        <header className="header">here is the Header</header>
            <div className="taskbar">
                this is where all the buttons will go aka the header, such as login,
                signup, signout, home etc nvm, its in Navigation
            </div>
        <div className="home-body">
            <div>
            this is where the watchlist will go
            </div>
        </div>
        <footer className="footer">here is the footer</footer>
        </>
    )
}

export default WelcomePage;
