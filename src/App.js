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

import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'


function App() {

  const PrivateRoute = ({component: Component, ...rest })=> {
    return <Route
      render={(props => {
        let isAuthenticated = sessionStorage.getItem("uuid")
        if (isAuthenticated) {
          return <Component {...props} />
        } else {
          return <Redirect to={{pathname: "/login"}} />
        }
      })}
    />
  }
  
  
  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/films" component={Films} />
          <PrivateRoute path="/starships" component={Startships} />
          <PrivateRoute path="/people" component={People} />
          <PrivateRoute path="/planets" component={Planets} />
          <PrivateRoute path="/species" component={Species} />         
        </Switch>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;