import React from 'react';
import './style.css';
import ProjectPost from '../../components/ProjectPost'

/**
* @author
* @function Project
**/

const Project = (props) => {
  return(
    <section className="container">
      <ProjectPost {...props}/>
    </section>
   );
 }

export default Project