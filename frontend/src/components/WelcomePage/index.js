import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import {NavLink} from "react-router-dom"
import './welcome.css'

const WelcomePage = () => {

    return (
        <>
            <div className="taskbar">
                website information, newsfeed etc
            </div>
        <div className="home-body">
            <div>
            im not sure if I need this component but it will stay just in case
            </div>
        </div>
        </>
    )
}

export default WelcomePage;
