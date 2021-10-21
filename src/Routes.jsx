import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import ProfilePage from "./Pages/ProfilePage";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/profile">
        <ProfilePage />
      </Route>
    </Switch>
  );
}

export default Routes;
