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
      <div className="menuButtons">{<ProfileButton user={sessionUser} />}</div>
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
    <div className="navbarContainer">
      <div className="HomeButton">
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
      <div>
        <div className="mast">BobbinHood</div>
        <div className="description">"what is this, stocks for ants?"</div>
      </div>

      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
