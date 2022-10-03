import "./app.css";
import React from "react";
import { Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Series from "./pages/series/Series";
import Movies from "./pages/Movies/Movies";

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Series">
        <Series />
      </Route>
      <Route path="/Movies">
        <Movies />
      </Route>
    </div>
  );
}

export default App;
