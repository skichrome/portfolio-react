import React, {useState, useEffect} from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { database } from '../../firebase';
import { Row, Col, Icon, Card, CardTitle } from 'react-materialize';

/**
* @author
* @function ProjectList
**/

const ProjectList = (props) => {
    let themeId = `${props.location.themeId}`;
    let categoryId = `${props.location.categoryId}`;

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

  const [projects, setProjects] = useState([]);

  useEffect(() => {
        const unsubscribe =  database.collection('themes')
            .doc(themeId)
            .collection('categories')
            .doc(categoryId)
            .collection('projects')
            .onSnapshot((snapshot) => {
                const allProjectsFromCategoryFromTheme = snapshot.docs.map((project) => ({
                    id: project.id,
                    ...project.data()
                }));
                setProjects(allProjectsFromCategoryFromTheme);
            });
            return () => {
                unsubscribe();
            }
    }, [themeId, categoryId]);

    if (themeId === 'undefined' || categoryId === 'undefined')
        return(<Redirect to='/' />);

    return(
        <div className="container">
            <Row>
                <Col l={12}>            
                    <h4 className="white-text center">Projets associés</h4>
                </Col>
                {
                    projects.map(project => {
                        const img = project.main_picture ? project.main_picture : "https://materializecss.com/images/sample-1.jpg"
                        const imgAlt = project.main_picture_alt ? project.main_picture_alt : "default materialize css card background"
                        const cardTitleCustomColor = <span style={{color: "#ff9800"}}>{project.title}</span>;
                        return(
                            <Col s={12} m={6} key={project.id}>
                                <Card
                                    className="light-blue darken-2 hoverable white-text"
                                    header={<CardTitle image={img} alt={imgAlt}>{cardTitleCustomColor}</CardTitle>}
                                    actions={[<NavLink key={project.id} to={{pathname: `/project/${project.title}`, themeId: `${themeId}`, categoryId: `${categoryId}`, projectId: `${project.id}`}}><Icon right>arrow_forward</Icon> En savoir plus</NavLink>]}
                                >
                                    {project.description}
                                </Card>
                            </Col>
                        );
                    })
                }
            </Row>
        </div>
    );
 }

export default ProjectList