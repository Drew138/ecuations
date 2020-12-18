import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import {Switch, Route} from 'react-router-dom'
import Home from './views/Home'
import LogIn from './views/LogIn'
import Register from './views/SignUp'

function App(): JSX.Element {
  return (
    <div className="App">
      <Navigation/>
      <section>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={LogIn}/>
          <Route exact path="/signup" component={() => <Register onSubmit={() => {console.log("hir")} }/>}/>
          <Route exact path="/history" />
          <Route exact path="/account" />
        </Switch>
      </section>
    </div>
  );
}

export default App;
