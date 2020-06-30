import React, { useState, useEffect } from 'react';
import 'materialize-css';
import { Icon, Card, CardTitle, Row, Col } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import { database } from '../../firebase';
import './style.css';

/**
* @author
* @function Theme
**/

const Theme = () => {
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        console.log('effect');
        const unsubscribe = database.collection('themes')
            .onSnapshot(snapshot => {
                const allThemes = snapshot.docs.map(theme => ({
                    id: theme.id,
                    ...theme.data()
                }));
                setThemes(allThemes);
            });
        return () => {
            console.log('cleanup');
            unsubscribe();
        }
    },[]);

  return(
    themes.map(theme => {
        const img = theme.image ? theme.image : "https://materializecss.com/images/sample-1.jpg"
        return(
            <Row key={theme.id}>
                <Col l={10} offset={'l1'} s={12}>
                    <Card actions={[<NavLink key={theme.id} to={{pathname: `/categories/${theme.name}`, themeId: theme.id}}><Icon right>arrow_forward</Icon> En savoir plus</NavLink>]}
                        title={theme.name}
                        textClassName="white-text"
                        className="light-blue darken-2 hoverable"
                        header={<CardTitle image={img} alt={theme.image_alt} className="valign-wrapper"></CardTitle>}
                        horizontal
                    >
                        <p>{theme.description}</p>
                    </Card>
                </Col>
            </Row>
        );
    })
  );
 }

export default Theme