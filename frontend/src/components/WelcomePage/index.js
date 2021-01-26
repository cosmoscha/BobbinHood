import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { NavLink } from "react-router-dom";
import "./welcome.css";
import WatchlistPage from "../WatchlistPage";

const WelcomePage = () => {
  return (
    <>
      <div className="home-body">
        <div className="graph-placeholder">
          <WatchlistPage />
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
