import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Product from "../containers/Product";
import Home from "../containers/Home";
import Login from "../containers/Login";
const CompRouter = ({ ...rest }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" render={() => <Login {...rest} />} />
        <Route exact path="/" render={() => <Home {...rest} />} />
        <Route exact path="/:id" render={() => <Product {...rest} />} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default CompRouter;
