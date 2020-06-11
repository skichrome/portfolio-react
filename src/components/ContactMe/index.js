import React from 'react';
import SocialNetworks from '../SocialNetworks';
import { Icon, Row, Col } from 'react-materialize';

/**
* @author
* @function ContactMe
**/

const ContactMe = (props) => {
  return(
    <Row>
        <Col s={4}>
            <h2 className="center"><Icon>email</Icon></h2>
            <h5 className="center">Une question ?</h5>
            <p className="center"> 
                <a href="mailto:toni.campeol@outlook.fr">toni.campeol@outlook.fr</a>
            </p>
        </Col>
        <Col s={4}>
            <h2 className="center"><Icon>people</Icon></h2>
            <h5 className="center">Restons en contact</h5>
            <SocialNetworks/>
        </Col>
        <Col s={4}>
            <h2 className="center"><Icon>phone</Icon></h2>
            <h5 className="center">Téléphone</h5>
            <p className="light center">+337 85 17 57 34</p>
        </Col>
    </Row>
   );
 }

export default ContactMe