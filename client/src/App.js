import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Writers from "./components/Writers";
import Dashboard from "./page/Dashboard";

// const books = ["one", "two", "three", "four"];
const authors = [
  { id: 0, name: "Ralph Waldo Emerson" },
  { id: 1, name: "Friedrich Nietzsche" },
  { id: 2, name: "Carl Jung" },
  { id: 3, name: "Joseph Campbell" },
  { id: 4, name: "Rajneesh Osho" }
];

function App() {
  return (
    <div className="">
      <Layout authors={authors}>
        <Switch>
          {/* <Route exact path="/" component={Layout}> Home </Route> */}
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route
            // exact **IMPORTANT: do not use exact here
            path="/writers"
            // **IMPORTANT: "props" refer to "history", "location", and "match"
            render={props => <Writers {...props} authors={authors} />}
          />
          <Route render={() => <div>Not found</div>}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
