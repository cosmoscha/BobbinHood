import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { NavLink } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    // e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu}>
        <i className="fas fa-bug" />
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <div className="featureLink">{user.username}</div>
          <div className="featureLink">{user.email}</div>
          <div>
            <button className="featureLink" onClick={logout}>
              Log Out
            </button>
          </div>
          <div className="featureLink">
            <NavLink to="/assets">Assets</NavLink>
          </div>
          <div className="featureLink">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </div>
          <div className="featureLink">
            <NavLink to="/watchlist">watchlist</NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
