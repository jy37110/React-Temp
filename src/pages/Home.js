import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Home extends Component{
    render(){
        return (
            <div className="HomeContainer">
                <Jumbotron>
                    <h1>Welcome to React!</h1>
                    <p>This is home page</p>
                </Jumbotron>
            </div>
        )
    }
}
