import React from 'react';
import './style.css';
import PresentationSlider from '../../components/PresentationSlider';
import Category from '../../components/Category';

const Home = props => {
    return(
        <div className="homeContainer">
            <PresentationSlider />
            <Category />
        </div>
    );
}

export default Home;