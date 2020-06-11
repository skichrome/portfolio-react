import React from 'react';
import './App.css';
import Home from './containers/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './containers/Contact';
import Project from './containers/Project';
import ProjectList from './containers/ProjectList';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/projects" component={ProjectList}/>
        <Route path="/project/:projectId" component={Project}/>
        <Route path="/contact" component={Contact}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
