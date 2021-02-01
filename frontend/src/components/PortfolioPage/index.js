import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PortfolioInfo from "./portfolioinfo"
import { fetchPortfolio, fetchPortfolioAssets } from "../../store/portfolio";
import "./PortfolioPage.css";
import { Switch, Route } from "react-router-dom";

function PortfolioPage() {
  const portfolio = useSelector((state) => state.portfolio.portfolio);
  const portfolioAssets = useSelector((state) => state.portfolio.portfolioAssets
  );
  // const portfolioLoaded = useSelector(state => (state.portfolio.portfolio.length !==0)? true : false)
  // const portfolioAssetsLoaded = useSelector(state => (state.portfolio.portfolioAssets.length !==0)? true : false)

  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  console.log("this is the portfolioAssets", portfolioAssets);
  console.log("this is the state.portfolio", portfolio);
  console.log("this is the state.session.user", user);

  useEffect(() => {
    console.log("this is user.id", user.id);
    dispatch(fetchPortfolio(user.id));
    dispatch(fetchPortfolioAssets(user.id));
  }, [dispatch]);

  return (
    <>
    { portfolio && portfolioAssets && (
  <div>
      <PortfolioInfo portfolio={portfolio} portfolioAssets={portfolioAssets}/>
    </div>)}
    </>
  );
}

export default PortfolioPage;
