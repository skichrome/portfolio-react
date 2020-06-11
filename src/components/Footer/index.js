import React from 'react';
import ContactMe from '../ContactMe';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
      <footer className="footerMaterial">
        <ContactMe/>
        <div className="z-depth-3 light-green">
            <div className="page-footer light-green">
                <div className="container">
                    <div className="col l6 s12">
                        <h5>En résumé</h5>
                        <p>je suis un étudiant passionné par beaucoup de domaines, je veux devenir quelqu'un de polyvalent capable de mener à bien plusieurs projets en même temps. Pour y parvenir je peux compter sur ma rigueur et mon autonomie.</p>
                    </div>
                    <div className="col l2 offset-l3 s12 center-align">
                        <h5>Credits</h5>
                        <ul>
                        <li><a href="http://materializecss.com/" target="_blank" rel="noopener noreferrer">Made by MaterialiseCSS</a><br/></li>
                        </ul>
                    </div>
                </div>
            </div >
            <div className="footer-copyright light-green darken-2">
                <div className="container">
                Le robot Android est reproduit ou modifié à partir d'une ressource créée et partagée par Google qui est utilisée selon les conditions décrites dans la licence d'attribution Creative Commons 3.0.
                </div>
            </div>
        </div>
      </footer>
   );
 }

export default Footer