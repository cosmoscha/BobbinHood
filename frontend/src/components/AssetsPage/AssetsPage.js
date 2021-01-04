import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAllAssets} from "../../store/assets";
import { NavLink } from 'react-router-dom';


import './AssetsPage.css';

const Asset = ({theAsset}) => {
  return (
    <li>
      <div>
      {theAsset.name}
        </div>
    </li>
  )
}

const AssetsPage= ()=> {
    const dispatch = useDispatch();
    const AssetsList = useSelector((state) => state.assets);

    useEffect(async() => {
    dispatch(fetchAllAssets()
    )
}, []);
      return (
          <div id="Assets-List">
          <h2>Assets List</h2>
            {AssetsList.map((asset=> {
              return <Asset theAsset={asset} key={asset.id} />
            }))}
          </div>
      )
}

export default AssetsPage;
