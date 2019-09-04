import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/Pages/Home';
import News from './components/Pages/News';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path="/news" component={News}/>
          </Switch>

        </div>
      </div>
    </Router>
  );
};

export default App;
