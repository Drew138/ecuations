import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import {Switch, Route} from 'react-router-dom'
import Home from './views/Home'
import LogIn from './views/LogIn'
import Register from './views/Register'

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
      </header>
      <section>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={LogIn}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
      </section>
    </div>
  );
}

export default App;
