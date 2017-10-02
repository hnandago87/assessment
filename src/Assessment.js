import React, { Component } from 'react';
import Question from './Question';
import Result from './Result';

var Questions  = require('./assessment.json');
class Assessment extends Component{
    constructor(props){
        super(props);
        this.state={
            questions:[],
            current:0,
            user_data:{}
        };
        this.saveAnswer = this.saveAnswer.bind(this);
        this.previousQuestion = this.previousQuestion.bind(this);
        this.beginTest = this.beginTest.bind(this);
    }
    componentWillMount(){
        this.setState({
            questions:Questions["questions"]
        });
    }
    previousQuestion(){
        if(this.state.current >= 0){
            this.setState({
                current: this.state.current-1
             })
        } else return 0;
        
    }

    beginTest(){
        this.setState({
            begin: !this.state.begin
        })
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
                    <div className="question-status">
                        <div className="direction-control">
                           {this.state.current===0?null: <span onClick={this.previousQuestion} className="glyphicon glyphicon-arrow-left arrow-color"></span>}
                        </div>
                        <p className="question-current-status">Step {this.state.current+1} of {this.state.questions.length}</p>
                        </div> 
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