import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Machines from "./components/Machines";
import Locations from "./components/Locations";
import Products from "./components/Products";
import Reports from "./components/Reports";
import Media from "./components/Media";
import UserManagement from "./components/UserManagement";
import Logout from "./components/Logout";

function App() {
  return (
    <div style={{ backgroundColor: "gray", height: "100vh" }}>
      <Layout>
        <Switch>
          <Route path="/machines" component={Machines} />
          <Route path="/locations" component={Locations} />
          <Route path="/products" component={Products} />
          <Route path="/reports" component={Reports} />
          <Route path="/media" component={Media} />
          <Route path="/userManagement" component={UserManagement} />
          <Route path="/logout" component={Logout} />
          <Route render={() => <div>Not found</div>}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
