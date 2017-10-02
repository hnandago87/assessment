import React, { Component } from 'react';
import Assessment from './Assessment.js';
import { Link } from 'react-router-dom'

class AssessmentStart extends Component{
    constructor(props){
        super(props);
        this.state={
            begin:false,
            user_data:{}
        };
        this.beginTest = this.beginTest.bind(this);
    }
    beginTest(){
        this.setState({
            begin: !this.state.begin
        })
        console.log("Begin Test");
    }
    render(){
        return(
            <div>
                <div>
                    <Link to='/register'><button className="btn-info">Register</button></Link>
                    <button className="btn-primary" onClick={this.beginTest}>Begin Test</button> 
                </div>
                {this.state.begin ? <Assessment /> : null}
            </div>
        )
    }
}

export default AssessmentStart;