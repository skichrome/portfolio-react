import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Home from './containers/Home';
import Contact from './containers/Contact';
import Project from './containers/Project';
import ProjectList from './containers/ProjectList';
import Header from './components/Header';
import Footer from './components/Footer';
import Categorylist from './containers/CategoryList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/categories/:themeName" component={Categorylist}/>
        <Route path="/projects" component={ProjectList}/>
        <Route path="/project/:projectName" component={Project}/>
        <Route path="/about-me" component={Contact}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
