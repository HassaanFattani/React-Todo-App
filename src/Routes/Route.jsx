import React from "react";
import AddComponent from "../TodoComponents/AddTodo";
import EditComponent from "../TodoComponents/EditTodo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/MainPage" component={AddComponent} />
        <Route exact path="/MainPage/:Id" component={EditComponent} />
      </Switch>
    </Router>
  );
}

export default Routes;
