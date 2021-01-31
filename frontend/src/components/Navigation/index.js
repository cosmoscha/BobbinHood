import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import HomeIcon from "@material-ui/icons/Home";

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
        <div className="loginButtons">
          <LoginFormModal />
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <div className="navbarContainer">
      <Link exact to="/" className="homeButton">
        <HomeIcon fontSize="large" />
      </Link>
      <div className="mastContainer">
        <div className="mast">
          <Link
            exact
            to="/"
            style={{ textDecoration: "none" }}
            className="MastLink"
          >
            BobbinHood
          </Link>
        </div>
        <div className="description">welcome to BobbinHood</div>
      </div>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
