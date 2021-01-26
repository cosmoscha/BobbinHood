import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAssets } from "../../store/assets";
import { Link, NavLink } from "react-router-dom";

import "./AssetsPage.css";

const Asset = ({ theAsset }) => {
  const linkUrl = `/asset/${theAsset.id}`;
  return (
    <div>
      <Link to={linkUrl}>{theAsset.name}</Link>
    </div>
  );
};

const AssetsPage = () => {
  const dispatch = useDispatch();
  const AssetsList = useSelector((state) => state.assets);

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
