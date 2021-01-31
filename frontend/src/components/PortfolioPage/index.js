import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchPortfolio, fetchPortfolioAssets } from "../../store/portfolio";
import "./PortfolioPage.css";

function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(false);
  const portfolio = useSelector((state) => state.portfolio.portfolio);
  const portfolioAssets = useSelector(
    (state) => state.portfolio.portfolioAssets
  );
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  console.log("this is the portfolioAssets", portfolioAssets);
  console.log("this is the state.portfolio", portfolio);
  console.log("this is the state.session.user", user);

  useEffect(() => {
    console.log("this is user.id", user.id);
    dispatch(fetchPortfolio(user.id)).then(() => setIsLoading(true));
    dispatch(fetchPortfolioAssets(user.id)).then(() => setIsLoading(true));
  }, [dispatch]);

  let assetDetails;
  if (isLoading) {
    assetDetails = (
      <div>
        <div>name of the asset {portfolioAssets.name} </div>
        <div>CB of the asset {portfolioAssets.costBasis} </div>
        <div>profit of the asset {portfolioAssets.profit} </div>
        <div>percentage of portfolio {portfolioAssets.percentage} </div>
        <div>
          <button>this button will delete an asset</button>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="PortfolioContainer">
        <div className="PortfolioTable">
          <div>Asset Name</div>
          <div>costBasis</div>
          <div>profit</div>
          <div>percentage</div>
        </div>
        {/* //make a map to define a tr with costbasis, profit, //percentage you
        grabbed from the assets defined on the assetPortfolio //table */}

        {/* {isLoading && ()} */}
      </div>
      {assetDetails}
    </>
  );
}

export default PortfolioPage;
