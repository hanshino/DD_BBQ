import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./view/NavBar";
import MainPage from "./view/MainPage";
import ChannelVideos from "./view/ChannelVideos";
import Videos from "./view/Videos";
import Axios from "axios";
Axios.defaults.baseURL = "/api";

const App = () => {
  return (
    <Router>
      <NavBar>
        <Switch>
          <Route path="/MainPage/ChannelVideos/:channelId/:videoId" component={Videos} />
          <Route path="/MainPage/ChannelVideos/:channelId" component={ChannelVideos} />
          <Route path="/MainPage" component={MainPage} />
          <Route path="/" component={Home} />
        </Switch>
      </NavBar>
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
