import React from "react";

function PortfolioInfo(portfolio, portfolioAssets) {

  return (
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
              <div>name of the asset {portfolioAssets.name} </div>
              <div>CB of the asset {portfolioAssets.costBasis} </div>
              <div>profit of the asset {portfolioAssets.profit} </div>
              <div>percentage of portfolio {portfolioAssets.percentage} </div>
              <div>
                <button>delete</button>
              </div>
            </div>
          </div>
        </div>

  );
}

export default PortfolioInfo;
