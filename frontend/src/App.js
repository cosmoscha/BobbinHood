import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormModal from "./components/LoginFormModal";
import AssetsPage from "./components/AssetsPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import WelcomePage from "./components/WelcomePage";
import AssetInformation from "./components/IndividualAsset";
import PortfolioPage from "./components/PortfolioPage";
import PortfolioInfo from "./components/PortfolioPage/portfolioinfo";
import WatchlistPage from "./components/WatchlistPage";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            {sessionUser ? <Redirect to="/" /> : <Redirect to="/" />}
            <WelcomePage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/login">
            <LoginFormModal />
          </Route>
          <Route exact path="/assets">
            {sessionUser ? <AssetsPage /> : <Redirect to="/" />}
          </Route>
          <Route path="/asset/:assetId">
            {sessionUser ? <AssetInformation /> : <Redirect to="/" />}
          </Route>
          <Route path="/portfolio">
            {sessionUser ? <PortfolioPage /> : <Redirect to="/" />}
          </Route>
          <Route path="/watchlist/:id">
            {sessionUser ? <WatchlistPage /> : <Redirect to="/" />}
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
