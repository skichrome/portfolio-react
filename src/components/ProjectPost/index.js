import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import ProjectPostData from "../../data/projets.json"

/**
* @author
* @function ProjectPost
**/

const ProjectPost = (props) => {

    const [project, setProject] = useState({});
    const [projectId, setProjectId] = useState('');

    useEffect(() => {
        const projectId = props.match.params.projectId;
        const project = ProjectPostData.find(project => project.id == projectId);
        setProject(project);
        setProjectId(projectId);
    }, [project, props.match.params.projectId]);

  return(
      <div className="projectPostContainer">
        <Card>
            <div className="projectPostHeader">  
                <span className="projectPostCategory">{project.category}</span>
                <h1 className="projectPostTitle">{project.title}</h1>
                <span className="projectPostPosted">{project.created}</span>
            </div>

            <div className="projectPostImageContainer">
                <img alt="Project post image" src={require("../../assets/nav_drawer_easyvgp.png")}/>
            </div>

            <div className="projectPostContent">
                <h3>{project.post_content_title}</h3>
                <p>{project.post_content}</p>
            </div>
        </Card>
      </div>
   );
 }

export default ProjectPost