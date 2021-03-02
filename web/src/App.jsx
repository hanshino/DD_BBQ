import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
Axios.defaults.baseURL = "/api";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

const Home = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    Axios.get("/hello")
      .then(res => res.data)
      .then(res => {
        setTimeout(() => {
          setName(res.name);
          setLoading(false);
        }, 1500);
      });
  }, []);

  if (loading) return <h1>Fetching...</h1>;

  return (
    <div>
      <h1>Home Page</h1>
      {name && <h2>Hi {name}</h2>}
    </div>
  );
};

export default App;
