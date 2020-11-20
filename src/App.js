import React from 'react';
import './assets/css/main.css'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Films from './pages/Films'
import Startships from './pages/Starships'
import People from './pages/People'
import Planets from './pages/Planets'
import Species from './pages/Species'
import Login from './pages/Login'

import { HashRouter, Switch, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/films" component={Films} />
          <Route path="/starships" component={Startships} />
          <Route path="/people" component={People} />
          <Route path="/planets" component={Planets} />
          <Route path="/species" component={Species} />
          <Route path="/login" component={Login} />
        </Switch>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;