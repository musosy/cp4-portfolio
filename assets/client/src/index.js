import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, /* Redirect */ } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Project from './components/projects/Project';
import Contributor from './components/contributors/Contributor';
//import NotFound from './components/notFound/NotFound';
import Navigation from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Container from 'react-bootstrap/Container';
const Routing = () => (
  <Router>
    <Navigation />
    <Switch>
      <Container fluid className="content" >
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/project/:id" component={Project} />
        <Route exact path="/contributor/:id" component={Contributor} />
        {/* <Route exact path="/404" component={NotFound}/>
        <Redirect to={{
          pathname: "/404",
          state: { from: window.location.pathname }
        }} /> */}
      </Container>
    </Switch>
    <Footer />
  </Router>
);
ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

