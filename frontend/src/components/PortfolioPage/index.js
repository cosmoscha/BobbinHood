import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchPortfolio } from "../../store/portfolio";
import "./PortfolioPage.css";

function PortfolioPage() {
  const portfolio = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, []);
  return (
    <>
      <div className="PortfolioContainer">
        <table className="PortfolioTable">
          <tr className="Tablerow">
            <th>Asset Name</th>
            <th>costBasis</th>
            <th>profit</th>
            <th>percentage</th>
            <th></th>
          </tr>
          {/* //make a map to define a tr with costbasis, profit, //percentage you
        grabbed from the assets defined on the assetPortfolio //table */}
          <tr>
            <td>name of the asset{portfolio.name}</td>
            <td>CB of the asset{portfolio.costBasis}</td>
            <td>profit of the asset{portfolio.profit}</td>
            <td>percentage of portfolio{portfolio.percentage}</td>
            <td>
              <button>this button will delete an asset</button>
            </td>
          </tr>
          <tr>
            <td>name of the asset{portfolio.name}</td>
            <td>CB of the asset{portfolio.costBasis}</td>
            <td>profit of the asset{portfolio.profit}</td>
            <td>percentage of portfolio{portfolio.percentage}</td>
            <td>
              <button>this button will delete an asset</button>
            </td>
          </tr>
          <tr>
            <td>name of the asset{portfolio.name}</td>
            <td>CB of the asset{portfolio.costBasis}</td>
            <td>profit of the asset{portfolio.profit}</td>
            <td>percentage of portfolio{portfolio.percentage}</td>
            <td>
              <button>this button will delete an asset</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default PortfolioPage;
