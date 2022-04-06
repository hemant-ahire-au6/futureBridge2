import "./App.css";
import { useEffect, useState } from "react";
import CardDetails from "./Component/CardDetails";

// 1.	Create a card view to show movies
// 2.	Each movie should have movie name, rating, released date
// 3.	Create a simple JSON for movies data. Minimum 20 movies required.
// 4.	Create a simple API in NodeJS to read data from JSON source
// 5.	Integrate your React app with the NodeJS API.
// 6.	Use React router in wherever possible here.
// 7.	Application UI should be clean and simple.

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Component/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/:id" exact>
          <CardDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
