import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAllAssets} from "../../store/assets";


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
              {AssetsList.map(asset => {
                  return <li>{asset}</li>
              })}
          </div>
          </>
      )
}

export default AssetsPage;
