import React, { useState, useEffect } from 'react';
import 'materialize-css';
import { Icon, Card, CardTitle, Row, Col } from 'react-materialize';
import ProjectsData from '../../data/projects-data.json'
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Category
**/

const Category = (props) => {
    const [projectDataList, setProjectDataList] = useState([]);

    useEffect(() => {
        const projectDataList = ProjectsData;
        setProjectDataList(projectDataList);
    },[projectDataList]);

  return(
    projectDataList.map(projectData => {
        const imgSrc = projectData.picture ? require('../../assets/' + projectData.picture) : null;
        return(
            <Row key={projectData.id}>
                <Col l={10} offset={'l1'} s={12}>
                    <Card actions={[<NavLink key={projectData.id} to={`/category/${projectData.id}`}><Icon right>arrow_forward</Icon> En savoir plus</NavLink>]}
                        title={projectData.name}
                        textClassName="white-text"
                        className="light-blue darken-2"
                        header={ imgSrc ? <CardTitle image={imgSrc} alt='rees' className="valign-wrapper"></CardTitle> : null }
                        horizontal
                    >
                        <p>{projectData.desc}</p>
                    </Card>
                </Col>
            </Row>
        );
    })
  );
 }

export default Category