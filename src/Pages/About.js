import React from 'react';
import logo from '../assets/globalbing-logo.png'


function About() {
    return (
        <div className="page-container">
            <h1>About</h1>
            <img src={logo} alt={"<h1>Globalbinge</h1>"}/>
            <p>Morbi magna felis, finibus vel urna sit amet, ornare interdum nulla. Duis fringilla lacus ac commodo ullamcorper. Maecenas gravida tincidunt purus eu dapibus. Phasellus a eros tincidunt urna finibus pellentesque. Phasellus pharetra tincidunt orci, vitae efficitur massa faucibus sed. Suspendisse id elit nec augue luctus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <p>Vivamus a interdum ex. Integer lacus nulla, feugiat ac justo a, convallis molestie neque. Suspendisse ac elit mollis, bibendum purus at, vulputate nisi. Pellentesque ornare libero neque, dignissim gravida dolor finibus id. Proin finibus rhoncus commodo. Nunc sit amet condimentum libero, quis rutrum felis. Aliquam ornare nibh non est viverra, vel fermentum leo hendrerit. In pretium vitae dolor non elementum. Ut ullamcorper efficitur felis, ac posuere mauris fermentum sit amet.</p>
        </div>
    );
}

export default About;