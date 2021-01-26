import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import { fetchWatchlist } from "../../store/watchlist";
import "./watchlist.css";

function WatchlistPage() {
  const watchlist = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchPortfolio());
  }, []);
  return (
    <>
      <div>
        <table>
          <tr>
            <th>Watchlist</th>
          </tr>
          {/* //make a map to define a tr with costbasis, profit, //percentage you
        grabbed from the assets defined on the assetPortfolio //table */}
          <tr>
            <td>watchlist.name</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default WatchlistPage;
