import React from 'react';
import './style.css';
import PresentationSlider from '../../components/PresentationSlider';

const Home = props => {
    return(
        <div className="homeContainer">
            <PresentationSlider />
        </div>
    );
}

export default Home;