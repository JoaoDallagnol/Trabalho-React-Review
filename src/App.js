import React from 'react';
import './assets/css/main.css'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Reviews from './pages/Reviews'
import Login from './pages/Login'

import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'


function App() {

  const PrivateRoute = ({component: Component,})=> {
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
          <PrivateRoute path="/films" component={Reviews} />       
        </Switch>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;