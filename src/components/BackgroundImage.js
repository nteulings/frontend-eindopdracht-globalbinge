import React from 'react';
import BgImage from '../assets/bg-image.jpeg'
import "./BackgroundImage.css"

function BackgroundImage() {
    return <img className="background-image" src={BgImage} alt="" />;
}

export default BackgroundImage;