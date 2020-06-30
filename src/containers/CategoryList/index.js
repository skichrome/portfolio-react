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
    let themeId = `${props.location.themeId}`;
    const [categories, setCategories] = useState([]);

    if (themeId !== 'undefined')
        localStorage.setItem('themeId', themeId);
    else
        themeId = localStorage.getItem('themeId');

    useEffect(() => {
        const unsubscribe = database.collection('themes')
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
                    <h4 className="white-text center">Catégories de projets associées</h4>
                </Col>
                {
                    categories.map(category => {
                        const img = category.image ? category.image : "https://materializecss.com/images/sample-1.jpg"
                        return (
                                <Col l={4} m={6} s={10} offset={'s1'} key={category.id}>
                                    <Card
                                        textClassName="white-text"
                                        className="light-blue darken-2 hoverable"
                                        closeIcon={<Icon>close</Icon>}
                                        header={<CardTitle image={img} alt={category.image_alt} reveal waves="light"/>}
                                        reveal={<p>{category.desc}</p>}
                                        revealIcon={<Icon>info</Icon>}
                                        title={category.name}
                                        actions={[<NavLink key={category.id} to={{pathname: `/projects/${category.name}`, themeId: `${themeId}`, categoryId: `${category.id}`}}><Icon right>arrow_forward</Icon> En savoir plus</NavLink>]}
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