import React from 'react';
import 'materialize-css';
import { Navbar, NavItem, Icon } from 'react-materialize';
import './style.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Navbar
**/

const MaterialNavbar = (props) => {
  return(
    <Navbar
    className="light-green"
      alignLinks="right"
      brand={<NavLink to="/">CAMPEOL Toni</NavLink>}
      id="mobile-nav"
      options= {{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
      sidenav={
        <ul>
          <li>
          <div className="user-view">
            <div className="background">
              <img src="https://placeimg.com/640/480/tech" alt="Profile information background" />
            </div>
            <NavLink className="sidenav-close" to="/"><img className="circle" src={require('../../assets/icons/logo_simple.png')} alt="Profile" /></NavLink>
            <NavLink className="sidenav-close" to="/"><span className="white-text name">CAMPEOL Toni</span></NavLink>
            <a className="sidenav-close" href="mailto:toni.campeol@outlook.fr"><span className="white-text email">toni.campeol@outlook.fr</span></a>
          </div>
        </li>
        <li><NavLink className="sidenav-close" to="/">Home</NavLink></li>
        <li><NavLink className="sidenav-close" to="/projects">Projets</NavLink></li>
        <li><NavLink className="sidenav-close" to="/about-me">A propos</NavLink></li>
        </ul>
      }
    >
      <NavItem href="/"><Icon className="left">home</Icon> Accueil</NavItem>
      <NavItem href="/projects"><Icon className="left">construction</Icon> Projets</NavItem>
      <NavItem href="/about-me"><Icon className="left">person</Icon> A propos</NavItem>
    </Navbar>
  );
 }

export default MaterialNavbar