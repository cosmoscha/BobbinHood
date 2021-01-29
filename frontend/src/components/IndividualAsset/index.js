import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneAsset, postAnAsset } from "../../store/assets";
import * as sessionActions from "../../store/session";
import { useParams } from "react-router-dom";
import "./IndividualAsset.css";

const AssetInformation = () => {
  const dispatch = useDispatch();
  const AssetInfo = useSelector((state) => state.assets[0]);
  const user = useSelector((state) => state.session.user);
  const urlInformation = useParams();
  console.log(urlInformation);

  const addToPortfolio = (e) => {
    e.preventDefault();
    console.log("url information", urlInformation.assetId);
    dispatch(postAnAsset(user.id, urlInformation.assetId));
  };

  useEffect(async () => {
    dispatch(fetchOneAsset(urlInformation.assetId));
  }, []);
  if (!AssetInfo) return null;

  return (
    <>
      <div className="home-body">
        <div className="info-body">
          <h1>page for information on each specific asset</h1>
          <div>name:{AssetInfo.name}</div>
          <div>price:{AssetInfo.price}</div>
          <div>marketcap:{AssetInfo.marketCap}</div>
          <div>rating:{AssetInfo.rating}</div>
          <button type="button" onClick={addToPortfolio}>
            add to portfolio
          </button>
        </div>
      </div>
    </>
  );
};

export default AssetInformation;
