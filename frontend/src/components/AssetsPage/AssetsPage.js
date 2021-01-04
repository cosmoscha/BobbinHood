import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAllAssets} from "../../store/assets";
import { NavLink } from 'react-router-dom';


import './AssetsPage.css';

const AssetsPage= ()=> {
const dispatch = useDispatch();
const AssetsList = useSelector((state) => state.assets);
useEffect(async() => {
    dispatch(fetchAllAssets()
    )
}, []);
      return (
          <>
          <div id="Assets-List">
              {AssetsList}
              I want there to be a navlink to each asset here, through map method
              <div>
          <NavLink to="/asset/:assetId">Assets</NavLink>
        </div>
          </div>
          </>
      )
}

export default AssetsPage;
