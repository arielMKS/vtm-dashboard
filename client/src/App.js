import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./components/Login";
import Dashboard from "./page/Dashboard";

// const books = ["one", "two", "three", "four"];
const books = [
  { id: 0, title: "one" },
  { id: 1, title: "two" },
  { id: 2, title: "three" },
  { id: 3, title: "four" }
];

class App extends React.Component {
  render() {
    return (
      <div className="">
        <Layout books={books}>
          <Switch>
            <Route exact path="/" component={Layout}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
