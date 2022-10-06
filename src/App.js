import "./app.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Series from "./pages/series/Series";
import Movies from "./pages/Movies/Movies";

function App() {
  const [searchTag, setSearchTag] = useState("");
  const handleSearch = (liftedData) => {
    setSearchTag(liftedData);
  };
  return (
    <div>
      <Navbar setSearchTag={handleSearch} />
      <Switch>
        <Route exact path="/">
          <Home searchTag={searchTag} />
        </Route>
        <Route exact path="/Series">
          <Series searchTag={searchTag} />
        </Route>
        <Route exact path="/Movies">
          <Movies searchTag={searchTag} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
