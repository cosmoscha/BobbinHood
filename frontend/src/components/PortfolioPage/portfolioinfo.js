import React from "react";
import { useDispatch, useSelector } from "react-redux";

function PortfolioInfo({portfolio, portfolioAssets}) {
  const portfolioLoaded = useSelector(state => (state.portfolio.portfolio.length !==0)? true : false)
  const portfolioAssetsLoaded = useSelector(state => (state.portfolio.portfolioAssets.length !==0)? true : false)
  console.log("this is the portfolio passeed down", portfolio)
  return (

    <>

    <div className="PortfolioContainer">
    <div className="PortfolioTable">
    <div className="Tablerow">
    <div>Asset Name</div>
    <div>{portfolio.costBasis}</div>
    <div>{portfolio.profit}</div>
    <div>{portfolio.percentage}</div>
    <div></div>
    </div>
    <div>
        <div>name of the asset {portfolioAssets[0].name} </div>
        <div>CB of the asset {portfolioAssets[0].costBasis} </div>
        <div>profit of the asset {portfolioAssets[0].profit} </div>
        <div>percentage of portfolio {portfolioAssets[0].percentage} </div>
        <div>
          <button>delete</button>
        </div>
      </div>
    </div>
    </div>
  </>
  );
}

export default PortfolioInfo;
