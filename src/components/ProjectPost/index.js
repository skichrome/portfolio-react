import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import { database } from '../../firebase';

/**
* @author
* @function ProjectPost
**/

const ProjectPost = (props) => {
    let themeId = `${props.location.themeId}`;
    let categoryId = `${props.location.categoryId}`;
    let projectId = `${props.location.projectId}`;

    // Save current theme and category ID to local storage to avoid errors
    // when refreshing the page or go back
    if (themeId !== 'undefined')
        localStorage.setItem('themeId', themeId);
    else
        themeId = localStorage.getItem('themeId');

    if (categoryId !== 'undefined')
        localStorage.setItem('categoryId', categoryId);
    else
        categoryId = localStorage.getItem('categoryId');

    if (projectId !== 'undefined')
        localStorage.setItem('projectId', projectId);
    else
        projectId = localStorage.getItem('projectId');

    const [project, setProject] = useState({
        id : "",
        category : "",
        title : "",
        created : "",
        post_content_title : "",
        post_content : ""
    });

    useEffect(() => {
        const unsubscribe = database.collection('themes')
            .doc(themeId)
            .collection('categories')
            .doc(categoryId)
            .collection('projects')
            .doc(projectId)
            .onSnapshot(snapshot => {
                const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
                const data = snapshot.data();
                const projectDate = new Date(Number(data.created.seconds * 1000));
                data.created = `${projectDate.getDate()} ${monthNames[projectDate.getMonth()]} ${projectDate.getFullYear()}`;

                const project = {
                    id: snapshot.id,
                    ...data
                }
                setProject(project);
            });
            return() => {
                unsubscribe();
            }
    }, [themeId, categoryId, projectId]);

  return(
      <div className="projectPostContainer">
        <Card>
            <div className="projectPostHeader">  
                <span className="projectPostCategory">{project.category}Category</span>
                <h1 className="projectPostTitle">{project.title}</h1>
                <span className="projectPostPosted">Créé le {project.created}</span>
            </div>

            <div className="projectPostImageContainer">
                <img alt="Project post" src={project.main_picture} alt={project.main_picture_alt}/>
            </div>

            <div className="projectPostContent">
                {
                    Object.values(project.post_content).map((item, index) => {
                        return(
                            <div className="white-text" key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className="projectContentImageContainer">
                                    <img alt="Project post" src={item.image}/>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </Card>
      </div>
   );
 }

export default ProjectPost