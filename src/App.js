import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './containers/Contact';
import Project from './containers/Project';
import ProjectList from './containers/ProjectList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Hero/>
        <Route path="/" exact component={Home}/>
        <Route path="/projects" component={ProjectList}/>
        <Route path="/project/:projectId" component={Project}/>
        <Route path="/contact" component={Contact}/>
      </Router>
    </div>
  );
}

export default App;
