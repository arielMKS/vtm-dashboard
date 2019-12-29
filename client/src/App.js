import React from "react";

import Layout from "./components/Layout";

function App() {
  React.useEffect(() => {
    console.log("app ue firing");
  });
  return (
    <div className="App">
      App
      <Layout />
    </div>
  );
}

export default App;
