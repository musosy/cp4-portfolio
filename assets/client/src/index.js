import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Project from './components/projects/Project';
import Contributor from './components/contributors/Contributor';
import Navigation from './components/layouts/Navbar';

const Routing = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/project/:id" component={Project} />
      <Route exact path="/contributor/:id" component={Contributor} />
    </Switch>
  </Router>
);
ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

