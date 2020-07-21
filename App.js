import React from 'react';
import './App.css';
import {BrowserRouter as Router,
Link,
Route,
Switch 
} from "react-router-dom";
import Home from './Home'
import About from './About';
import Dashboard from './Dashboard';

function App() {
  return (
  <Router>
      
      <div className="main">
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <hr/>
      </div>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
      </Router>
      
  );
}

export default App;
