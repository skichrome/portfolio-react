import React, {useState, useEffect} from 'react';
import {  Redirect, NavLink } from 'react-router-dom';
import { database } from '../../firebase';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
import './style.css';

/**
* @author
* @function Categorylist
**/

const Categorylist = (props) => {
    const themeId = `${props.location.themeId}`;
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const unsubscribe = database.collection('portfolio')
            .doc('V1.0')
            .collection('themes')
            .doc(themeId)
            .collection('categories')
            .onSnapshot(snapshot => {
                const allCategoriesFromTheme = snapshot.docs.map(category => ({
                    id: category.id,
                    ...category.data()
                }));
                setCategories(allCategoriesFromTheme);
            });
            return() => {
                unsubscribe();
            }
    }, [themeId]);

    if (themeId === 'undefined')
        return(<Redirect to='/' />);

    return(
        <div className="container">
            <Row>
                <Col l={12}>            
                    <h4 className="white-text">Catégories de projets associées</h4>
                </Col>
                {
                    categories.map(category => {
                        return (
                                <Col l={4} m={6} s={10} offset={'s1'} key={category.id}>
                                    <Card
                                        textClassName="white-text"
                                        className="light-blue darken-2 hoverable"
                                        closeIcon={<Icon>close</Icon>}
                                        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
                                        reveal={<p>{category.desc}</p>}
                                        revealIcon={<Icon>info</Icon>}
                                        title={category.name}
                                        actions={[<NavLink to={{pathname: `/category/`}}><Icon right>arrow_forward</Icon> En savoir plus</NavLink>]}
                                    >
                                    </Card>
                                </Col>
                            );
                        }
                    )
                }
            </Row>
        </div>
    );
}

export default Categorylist