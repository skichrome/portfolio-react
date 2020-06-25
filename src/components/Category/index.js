import React, { useState, useEffect } from 'react';
import 'materialize-css';
import { Icon, Card, CardTitle, Row, Col } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import { database } from '../../firebase';

/**
* @author
* @function Category
**/

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        console.log('effect');
        const categoriesFromFirestore = database.collection('portfolio')
            .doc('V1.0')
            .collection('categories')
            .onSnapshot(snapshot => {
                const allCategories = snapshot.docs.map(category => ({
                    id: category.id,
                    ...category.data()
                }));
                setCategories(allCategories);
            });
        return () => {
            console.log('cleanup');
            categoriesFromFirestore();
        }
    },[]);

  return(
    categories.map(category => {
        const imgSrc = category.picture ? require('../../assets/' + category.picture) : null;
        return(
            <Row key={category.id}>
                <Col l={10} offset={'l1'} s={12}>
                    <Card actions={[<NavLink key={category.id} to={`/category/${category.id}`}><Icon right>arrow_forward</Icon> En savoir plus</NavLink>]}
                        title={category.name}
                        textClassName="white-text"
                        className="light-blue darken-2"
                        header={ imgSrc ? <CardTitle image={imgSrc} alt='rees' className="valign-wrapper"></CardTitle> : null }
                        horizontal
                    >
                        <p>{category.desc}</p>
                    </Card>
                </Col>
            </Row>
        );
    })
  );
 }

export default Category