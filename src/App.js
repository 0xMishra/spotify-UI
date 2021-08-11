import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Home, { BottomNavbar } from "./components/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
          <BottomNavbar />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
