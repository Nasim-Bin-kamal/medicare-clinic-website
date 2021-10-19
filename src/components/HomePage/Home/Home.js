import React from 'react';
import Description from '../Description/Description';
import PatientGallery from '../PatientGallery/PatientGallery';
import Services from '../Services/Services';
import TopSlider from '../TopSlider/TopSlider';

const Home = () => {
    return (
        <div>
            <TopSlider />
            <Services />
            <Description />
            <PatientGallery />
        </div>
    );
};

export default Home;