import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext } from "react";
import PrivateRoute from "./Components/PrivateRouter/PrivateRoute";
import Login from "./Components/Login/Login";
import Search from "./Components/Search/Search";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";

export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
      <Router>
        <Navigation />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute exact path="/">
            <Header />
          </PrivateRoute>

          <PrivateRoute path="/search">
            <Search />
          </PrivateRoute>
        </Switch>

        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
