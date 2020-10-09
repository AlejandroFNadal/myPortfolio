import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './fonts/Roboto/Roboto-Regular.ttf'

import Header from './components/Header'
import Me from './components/Me'
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Education from './components/Education'
import { Helmet } from 'react-helmet'
import Portfolio from './components/Portfolio'
import LogisticMap from './components/LogisticMap'


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Alejandro Nadal</title>
      </Helmet>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Me />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/logisticMap">
            <LogisticMap />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
