import React from 'react';
import { HashRouter as Router, Route, link, Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

const Test = () => {
    return (
        <div className="test">
            <img src="/images/logo.png" alt="" className="logo"></img>
            <div className="test__quest">
                <h1>Me encuentro en:</h1>
                <div className="test__questContainer">
                    <div className="test__questCard">
                        <img src="/images/Colombia.png" alt="" className="test__questCardImage" />
                        <h3>Colombia</h3>
                    </div>

                    <div className="test__questCard">
                        <img src="/images/Venezuela.png" alt="" className="test__questCardImage" />
                        <h3>Venezuela</h3>
                    </div>

                </div>


            </div>
        </div>

    )

}

export default Test;