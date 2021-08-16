import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbabr from "./MyComponents/Navbar";
import Sign from "./MyComponents/Sign";
import Home from "./MyComponents/Home";
import Breakfast from "./MyComponents/Breakfast";
import Lunch from "./MyComponents/Lunch";
import Dinner from "./MyComponents/Dinner";
import Cart from "./MyComponents/Cart";

function App() {
  return (
    <>
      <Router>
        <Navbabr />
        <Switch>
          {/* --------------------------------------------------- Sign --------------------------------------- */}
          <Route
            exact
            path="/sign"
            render={() => {
              return (
                <>
                  <Sign />
                </>
              );
            }}
          ></Route>

          {/* --------------------------------------------------- Home --------------------------------------- */}
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Home />
                </>
              );
            }}
          ></Route>

          {/* --------------------------------------------------- Breakfast --------------------------------------- */}
          <Route
            exact
            path="/breakfast"
            render={() => {
              return (
                <>
                  <Breakfast />
                </>
              );
            }}
          ></Route>

          {/* --------------------------------------------------- Lunch --------------------------------------- */}
          <Route
            exact
            path="/lunch"
            render={() => {
              return (
                <>
                  <Lunch />
                </>
              );
            }}
          ></Route>

          {/* --------------------------------------------------- Dinner --------------------------------------- */}
          <Route
            exact
            path="/dinner"
            render={() => {
              return (
                <>
                  <Dinner />
                </>
              );
            }}
          ></Route>

          {/* --------------------------------------------------- Dinner --------------------------------------- */}
          <Route
            exact
            path="/cart"
            render={() => {
              return (
                <>
                  <Cart />
                </>
              );
            }}
          ></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
