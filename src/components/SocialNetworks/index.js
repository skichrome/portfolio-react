import React from 'react';

/**
* @author
* @function SocialNetworks
**/

const SocialNetworks = (props) => {
  return(
    <p className="light center"> 
                <a href="https://www.linkedin.com/in/toni-campeol-dev-android/" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/icons/linkedin.svg')} width="40" height="..." alt="LinkedIn" /></a>
                <a href="https://github.com/skichrome" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/icons/github.svg')} width="40" height="..." alt="Github" /></a>
                <a href="https://twitter.com/skichrome?lang=fr" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/icons/twitter.svg')} width="40" height="..." alt="Twitter" /></a>
                <a href="https://www.instagram.com/skichrome/" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/icons/instagram.svg')} width="40" height="..." alt="Instagram" /></a> 
                <a href="https://www.facebook.com/toni.campeol" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/icons/facebook.svg')} width="40" height="..." alt="Facebook" /></a>
            </p>
   );
 }

export default SocialNetworks