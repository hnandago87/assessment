import React, { Component } from 'react';
import Question from './Question';
import Result from './Result';
var Questions  = require('./assessment.json');
class Assessment extends Component{
    constructor(props){
        super(props);
        this.state={
            questions:[],
            current:0
        };
        this.saveAnswer = this.saveAnswer.bind(this);
    }
    componentWillMount(){
        this.setState({
            questions:Questions["questions"]
        });
    }
    saveAnswer(answer, id){
        let questionsToUpdate = this.state.questions;
        questionsToUpdate.forEach((question)=>{
            if(question.id === id){
                question.user_answer = answer
            }
        });
        this.setState({
           questions:questionsToUpdate,
           current:this.state.current+1
        });
    }
    
    render(){
        return(
            <div>
                {this.state.current+1 < 5 ? 
                    <div className="question-status"><p>Step {this.state.current+1} of {this.state.questions.length}</p></div> 
                    : null
                }
                {
                    this.state.current <4 ?
                        <Question recieveValue={this.saveAnswer} question={this.state.questions[this.state.current]} /> 
                    :
                        <Result answers={this.state.questions} />
               }
            </div>
        )
    }
}

export default Assessment;