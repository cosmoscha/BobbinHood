import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormModal from "./components/LoginFormModal";
import AssetsPage from "./components/AssetsPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import PageHeader from "./components/Header";
import PageFooter from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>

      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route exact path="/">
            <PageHeader />
            <PageFooter />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/login">
            <LoginFormModal />
          </Route>
          <Route path="/asset">
            <AssetsPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
