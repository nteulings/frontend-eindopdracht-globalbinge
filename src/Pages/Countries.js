import React from 'react';
import axios from "axios";



function Countries() {
    const options = {
        method: 'GET',
        url: 'https://unogsng.p.rapidapi.com/countries',
        headers: {
            'x-rapidapi-key': '2e8b09e3d2msh1084c477e7f77c9p1d3a48jsn5f4876882df6',
            'x-rapidapi-host': 'unogsng.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    return (
        <div className="page-container">
            <h1>Countries</h1>
        </div>
    );
}

export default Countries;