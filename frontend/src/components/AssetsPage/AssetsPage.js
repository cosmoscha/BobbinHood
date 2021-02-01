import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAssets } from "../../store/assets";
import { Link } from "react-router-dom";
import Assets from "./assetslist";
import AssetsLister from "./assetslist";

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

  useEffect(async () => {
    dispatch(fetchAllAssets());
  }, []);

  return <>{AssetsList && <AssetsLister AssetsList={AssetsList} />}</>;
};

export default AssetsPage;
