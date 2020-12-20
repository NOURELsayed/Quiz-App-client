import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
// import { Container } from './styles';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/SignUp'

export default function quizApp() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/" component={Login}/>
            <Route exact path="/Signup" component={Signup}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
