import React, { useState, useEffect } from 'react';
import 'materialize-css';
import { Icon, Card, CardTitle, Row, Col } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import { database } from '../../firebase';

/**
* @author
* @function Theme
**/

const Theme = () => {
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        console.log('effect');
        const unsubscribe = database.collection('portfolio')
            .doc('V1.0')
            .collection('themes')
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
        const imgSrc = theme.picture ? require('../../assets/' + theme.picture) : null;
        return(
            <Row key={theme.id}>
                <Col l={10} offset={'l1'} s={12}>
                    <Card actions={[<NavLink key={theme.id} to={{pathname: `/categories/${theme.name}`, themeId: theme.id}}><Icon right>arrow_forward</Icon> En savoir plus</NavLink>]}
                        title={theme.name}
                        textClassName="white-text"
                        className="light-blue darken-2 hoverable"
                        header={ imgSrc ? <CardTitle image={imgSrc} alt='rees' className="valign-wrapper"></CardTitle> : null }
                        horizontal
                    >
                        <p>{theme.desc}</p>
                    </Card>
                </Col>
            </Row>
        );
    })
  );
 }

export default Theme