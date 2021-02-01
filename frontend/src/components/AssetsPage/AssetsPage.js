import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAssets } from "../../store/assets";
import { Link } from "react-router-dom";
import Assets from "./assetslist";

import "./AssetsPage.css";

const Asset = ({ theAsset }) => {
  const linkUrl = `/asset/${theAsset.id}`;
  return (
    <div>
      <Link to={linkUrl}>{theAsset.symbol}</Link>
    </div>
  );
};

const AssetsPage = () => {
  const dispatch = useDispatch();
  const AssetsList = useSelector((state) => state.assets);
  console.log("this is the AssetsList", AssetsList);

  useEffect(async () => {
    dispatch(fetchAllAssets());
  }, []);

  if (!AssetsList) return null;

  return (
    <div id="Assets-List">
      <h2>Assets List</h2>
      {AssetsList.map((asset) => {
        return <Asset theAsset={asset} key={asset.id} />;
      })}
    </div>
  );
};

export default AssetsPage;
