import React, {useState, useEffect} from 'react';
import './style.css';
import ProjectPostData from "../../data/projets.json";
import { NavLink } from 'react-router-dom';

/**
* @author
* @function ProjectList
**/

const ProjectList = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      const projects = ProjectPostData;
      setProjects(projects);
  }, projects);

  return(
      <div className="projects">
          {
              projects.map(project => {
                  return(
                      <NavLink to={`/project/${project.id}`}>
                          <h1>{project.title}</h1>
                          <div>{project.created}</div>
                      </NavLink>
                  );
              })
          }
      </div>
   );
 }

export default ProjectList