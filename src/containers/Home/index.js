import React from 'react';
import './style.css';
import PresentationSlider from '../../components/PresentationSlider';
import Theme from '../../components/Themes';

const Home = props => {
    return(
        <div className="homeContainer">
            <PresentationSlider />
            <Theme />
        </div>
    );
}

export default Home;