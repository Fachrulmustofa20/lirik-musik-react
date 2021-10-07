import React from "react";
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Container/Pages/Home/Home';
import Search from './Container/Pages/Search/Search';
import Favorite from './Container/Pages/Favorite/Favorite';
import Navigation from './Component/Navigation';
import DetailLyrics from "./Container/Pages/DetailLyrics/DetailLyrics";
import NotFound from "./Component/NotFound";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/top" />
        <Route path="/lyrics/:songId" component={DetailLyrics} />
        <Route path="/search" component={Search} />
        <Route path="/favorite" component={Favorite} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
