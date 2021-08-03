import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import SignIn from "./pages/SignIn";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact>
          <SignIn />
        </Route>
        <Route   path={"/chat/:userId"}>
          <ChatPage />
        </Route>
      </Switch>
    </Router>
  );
}
