import React from "react";
import { Link } from "react-router-dom";
function PortfolioInfo({ portfolio, portfolioAssets }) {
  console.log("this is the portfolio passeed down", portfolio);

  const Asset = ({ theAsset }) => {
    const linkUrl = `/asset/${theAsset.id}`;
    return (
      <div>
        <Link to={linkUrl}> {theAsset.name} </Link>
        <div> {theAsset.costBasis} </div>
        <div> {theAsset.profit} </div>
        <div>{theAsset.percentage} </div>
        <div>
          <button>delete</button>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="PortfolioContainer">
        <div className="PortfolioTable">
          <div className="Tablerow">
            <div>Asset Name</div>
            <div>costBasis</div>
            <div>profit</div>
            <div>percentage</div>
            <div>marketCap</div>
            <div>price</div>
            <div>rating</div>
            <div>description</div>
            {portfolioAssets.map((asset) => {
              return <Asset theAsset={asset} key={asset.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioInfo;
