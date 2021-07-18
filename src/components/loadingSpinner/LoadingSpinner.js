import React from 'react';
import LoadingSpinner from '../../assets/spinning-circles.svg'
import "./LoadingSpinner.css"

function Loading() {
    return <img className="loading" src={LoadingSpinner} alt="Loading..." />;
}

export default Loading;