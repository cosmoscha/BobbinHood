import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PortfolioInfo from "./portfolioinfo";
import { fetchPortfolio, fetchPortfolioAssets } from "../../store/portfolio";
import "./PortfolioPage.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function PortfolioPage() {
  const portfolio = useSelector((state) => state.portfolio.portfolio);
  const portfolioAssets = useSelector(
    (state) => state.portfolio.portfolioAssets
  );
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolio(user.id));
    dispatch(fetchPortfolioAssets(user.id));
  }, [dispatch]);

  return (
    <>
      {portfolio && portfolioAssets && (
        <div>
          <PortfolioInfo
            portfolio={portfolio}
            portfolioAssets={portfolioAssets}
          />
        </div>
      )}
    </>
  );
}

export default PortfolioPage;
