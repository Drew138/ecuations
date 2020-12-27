import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import {Switch, Route} from 'react-router-dom'
import Home from './views/Home'
import LogIn from './views/LogIn'
import SignUp from './views/SignUp'
import History from './views/History'
import Account from './views/Account'
import Footer from "./components/Footer"

function App(): JSX.Element {
  return (
    <div className="App">
      <Navigation/>
      <section>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={LogIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/history" component={History}/>
          <Route exact path="/account" component={Account}/>
        </Switch>
      </section>
      <Footer/>
    </div>
  );
}
// https://material-ui.com/components/avatars/
export default App;
