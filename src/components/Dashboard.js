import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Card, Heading, Pane } from 'evergreen-ui'

class Dashboard extends Component {
    state = {
        showQuestions: 'unansweredQuestions'
    }

    handleShowQuestions = (type) => {
        this.setState({
            showQuestions: type
        })
        console.log(">>>> Clicked TAB for " + type)
    }

    render() {
        console.log(this.props)
        return (
            <Pane
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="default"
            >
                {/* Question List container */}
                <Card
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="default"
                    margin={72}
                    elevation={4}
                    flexDirection="column"
                >
                    {/* Tabs to change type of questions to display */}
                    {/* Apply bg color conditionally per active tab */}
                    <div className="flex text-center cursor-pointer">
                        <Pane
                            alignItems="center"
                            justifyContent="center"
                            border="default"
                            width={300}
                        >
                            <Heading
                                size={700}
                                paddingX={8}
                                paddingY={16}
                                className={`${this.state.showQuestions === 'unansweredQuestions' ? "bg-green-300" : "bg-gray-200"}`}
                                onClick={()=> this.handleShowQuestions('unansweredQuestions')}
                            >
                                Unanswered Questions
                            </Heading>
                        </Pane>
                        <Pane
                            alignItems="center"
                            justifyContent="center"
                            border="default"
                            width={300}
                        >
                            <Heading
                                size={700}
                                paddingX={8}
                                paddingY={16}
                                className={`${this.state.showQuestions === 'answeredQuestions' ? "bg-green-300" : "bg-gray-200"}`}
                                onClick={() => this.handleShowQuestions('answeredQuestions')}
                            >
                                Answered Questions
                            </Heading>
                        </Pane>
                    </div>
                    {/* List each Question component */}
                    <ul>
                        {this.props.questionIds.map((id) => (
                            <li key={id}>
                                <Question id={id}/>
                            </li>
                        ))}
                    </ul>
                </Card>
            </Pane>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)
