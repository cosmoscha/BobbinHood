import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { deleteAnAsset } from "../../store/portfolio";
import { useDispatch } from "react-redux";

function PortfolioInfo({ portfolio, portfolioAssets }) {
  const dispatch = useDispatch();
  console.log("this is the portfolio passeed down", portfolio);

  const Asset = ({ theAsset }) => {
    const deleteAsset = (e) => {
      e.preventDefault();
      console.log("url information", theAsset.id);
      dispatch(deleteAnAsset(theAsset.id));
    };

    const linkUrl = `/asset/${theAsset.id}`;
    console.log("this is THE asset", theAsset);
    return (
      <div>
        <Link to={linkUrl}> {theAsset.name} </Link>
        <div> {theAsset.costBasis} </div>
        <div> {theAsset.profit} </div>
        <div>{theAsset.percentage} </div>
        <div>
          <button type="button" onClick={deleteAsset}>
            delete
          </button>
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
