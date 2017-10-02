/*
{this.state.begin && this.state.current+1 < 5 ? 
                    <div className="question-status">
                        <div className="direction-control">
                           {this.state.current===0?null: <span onClick={this.previousQuestion} className="glyphicon glyphicon-arrow-left arrow-color"></span>}
                        </div>
                        <p className="question-current-status">Step {this.state.current+1} of {this.state.questions.length}</p>
                        </div> 
                    : null
                }
                {
                    this.state.begin && this.state.current <4 ?
                        <Question recieveValue={this.saveAnswer} question={this.state.questions[this.state.current]} /> 
                    :
                        <Result answers={this.state.questions} />
               }
*/