import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneAsset, postAnAsset } from "../../store/assets";
import { useParams } from "react-router-dom";
import "./IndividualAsset.css";
import AddIcon from "@material-ui/icons/Add";

const AssetInformation = () => {
  const dispatch = useDispatch();
  const AssetInfo = useSelector((state) => state.assets[0]);

  const user = useSelector((state) => state.session.user);
  const assetId = useParams();

  const addToPortfolio = (e) => {
    e.preventDefault();

    dispatch(postAnAsset(user.id, assetId));
  };

  useEffect(async () => {
    dispatch(fetchOneAsset(assetId.assetId));
  }, []);

  if (!AssetInfo) return null;

  return (
    <div className="home-body">
      {/* <div className="home-body">
        <div className="info-body">
          <div>name:{AssetInfo.name}</div>
          <div>price:{AssetInfo.price}</div>
          <div>marketcap:{AssetInfo.marketCap}</div>
          <div>rating:{AssetInfo.rating}</div>
          <button type="button" onClick={addToPortfolio}>
            add to portfolio
          </button>
        </div>
      </div> */}

      <table className="info-body">
        <tbody>
          <tr className="header">
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Rating</th>
            <th></th>
          </tr>
          <tr className="tableData">
            <td>{AssetInfo.name}</td>
            <td>{AssetInfo.price}</td>
            <td>{AssetInfo.marketCap}</td>
            <td>{AssetInfo.rating}</td>
            <td>
              <button type="button" onClick={addToPortfolio}>
                <AddIcon />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AssetInformation;
