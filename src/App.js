import "./app.css";

import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Series from "./pages/series/Series";
import Movies from "./pages/Movies/Movies";

function App() {
  const [searchTag, setSearchTag] = useState("");

  // Search is not an individual route and is instead on each page so that shows are filtered based on movies, series and all(home)
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
