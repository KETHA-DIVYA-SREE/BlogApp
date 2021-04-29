import React from 'react';
import './../App.css';

const NavBar = () => {
    return (
        <div className="d-flex justify-content-around">
            <a href="/">Home</a>
            <a href="/bollywood">Bollywood</a>
            <a href="/fitness">Fitness</a>
            <a href="/food">Food</a>
            <a href="/hollywood">Hollywood</a>
            <a href="/technology">Technology</a>
        </div>
    )
}

export default NavBar;
