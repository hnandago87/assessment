import React, { Component } from 'react';
class Result extends Component{
    constructor(props){
        super(props);
        this.state={
            result:0
        };
    }
    componentWillMount(){
        //console.log(this.props.answers);
        let tempResult = 0;
        this.props.answers.forEach((question)=>{
            if(question.actual_answer === question.user_answer){
                tempResult +=1;
            }
        });
        console.log(tempResult);
        this.setState({
            result:tempResult
        });
    }
    render(){
        return(
            <div>
                <h1>Result Page</h1>
                <div className="result-stats">
                    <h2>The number of correct answers are {this.state.result}</h2>
                </div>
                </div>
        )
    }
}
export default Result