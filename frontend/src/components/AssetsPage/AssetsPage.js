import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAllSpots} from "../../store/assets";
import {NavLink} from "react-router-dom"

import './AssetsPage.css';

const AssetsPage= ()=> {
const dispatch = useDispatch();
const AssetsList = useSelector((state) => state.assets.assets);
useEffect (()=> {
    dispatch(fetchAllSpots())
})
      return (
          <>
          <div id="Assets-List">
              <NavLink to= {"/assets"}>assets</NavLink>
          </div>

          <ul>assets list
              {AssetsList.map((asset) => (
                  <li key={asset}>{asset}</li>
              ))}
          </ul>
          </>
      )
}

export default AssetsPage;
