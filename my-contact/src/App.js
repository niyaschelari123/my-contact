import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import AddEdit from "./pages/AddEdit";
import View from "./pages/view";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addContact">
          <AddEdit />
        </Route>
        <Route path="/update/:id">
          <AddEdit />
        </Route>
        <Route path="/view/:id">
          <View />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
