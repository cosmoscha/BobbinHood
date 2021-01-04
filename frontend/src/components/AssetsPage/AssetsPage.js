import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAllAssets} from "../../store/assets";
import { NavLink } from 'react-router-dom';


import './AssetsPage.css';

const AssetsPage= ()=> {
    const dispatch = useDispatch();
    const AssetsList = useSelector(state => {
    return state.assets;
    });

    useEffect(async() => {
    dispatch(fetchAllAssets()
    )
}, []);
      return (
          <div id="Assets-List">
          <h2>Assets List</h2>
            {/* {!AssetsList && <h3>Loading ..........</h3>}
            {AssetsList && Assetslist.map(asset => {
                return <Asset theAsset={asset} key={asset.id} />;
            })} */}
        {/* <div>
          <NavLink to="/asset/:assetId">Assets</NavLink>
        </div> */}
          </div>
      )
}

export default AssetsPage;
