import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.scss';
// Page Components
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

class App extends React.Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Redirect to='/' /> 
      </Switch>
    </Router>
    );
  }
}

export default App;
