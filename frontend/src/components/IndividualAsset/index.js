import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneAsset, postAnAsset } from "../../store/assets";
import * as sessionActions from "../../store/session";
import { useParams } from "react-router-dom";

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
      <h1>page for information on each specific asset</h1>
      <div>this is where the name of the asset goes</div>
      <div>
        name
        <div>{AssetInfo.name}</div>
      </div>
      <div>
        price
        <div>{AssetInfo.price}</div>
      </div>
      <div>
        marketcap
        <div>{AssetInfo.marketCap}</div>
      </div>
      <div>
        rating
        <div>{AssetInfo.rating}</div>
      </div>
      <button type="button" onClick={addToPortfolio}>
        add to portfolio
      </button>
    </>
  );
};

export default AssetInformation;
