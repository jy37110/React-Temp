import React, { Component } from 'react';

export default class TestPage extends Component{
    render(){
        return (
            <div className="testRoot" style={this.style.border}>
                <div className="row">
                    <div className="col-md-12" style={this.style.border}>
                        <h2>This is the Home page</h2>
                    </div>
                </div>
                <div className="row" style={this.style.border}>
                    <div className="col-md-4">
                        <p style={this.style.border}>4</p>
                    </div>
                    <div className="col-md-8">
                        <p style={this.style.border}>8</p>
                    </div>
                </div>
            </div>
        )
    }

    style = {
        border:{
            // borderStyle:'solid',
            // borderWidth:1,
        }
    }
}
