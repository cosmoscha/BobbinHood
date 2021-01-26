import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        <div className="menuContainer">
          <div className="menuButtons">
            <div>
              <NavLink to="/assets">Assets</NavLink>
            </div>
            <div>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className="logOutButtons">
          <LoginFormModal />
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </>
  );
}

export default Navigation;
