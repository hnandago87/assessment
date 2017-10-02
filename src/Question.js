import React, { Component } from 'react';

class Question extends Component{
    constructor(props){
        super(props);
        this.saveAnswer = this.saveAnswer.bind(this);
    }
    saveAnswer(value, e){
        console.log(value[0].option);
        console.log(this.props.question.id);
        this.props.recieveValue(value[0].option,this.props.question.id);
    }
    
    render(){
        return(
            <div className="questioni-frame">
                <h3 className="question">{this.props.question.question}</h3>
                <h5 className="question-description">{this.props.question.question_description}</h5>
                <div className="options-frame">
                    { this.props.question.options.map((option)=>(
                        <button className="options-spacing" onClick={this.saveAnswer.bind(this,[{option}])} key={option} vaue={option}>{option}</button>
                    ))}
                </div>
            </div>
        )
    }
}

export default Question;