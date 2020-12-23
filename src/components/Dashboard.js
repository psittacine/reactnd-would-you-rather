import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Card, Heading, Pane, Paragraph } from 'evergreen-ui'

class Dashboard extends Component {
    state = {
        showQuestions: 'unansweredQuestions'
    }

    handleShowQuestions = (type) => {
        this.setState({
            showQuestions: type
        })
        // console.log(">>>> Clicked TAB for " + type)
    }

    render() {
        // console.log('*********** Dashboard - this.props ***********', this.props)
        // console.log('*** Dashboard - this.state ***', this.state)

        const { authedUser, questionIds, questions } = this.props

        const hasVoted = questionIds.filter((id) => (
            questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser)))

            // console.log('###### hasVoted = ', hasVoted)

        const hasNotVoted = questionIds.filter((id) => (
            !questions[id].optionOne.votes.includes(authedUser) && !questions[id].optionTwo.votes.includes(authedUser)))

            // console.log('###### hasNotVoted = ', hasNotVoted)

        return (
            <Pane
                // display="flex"
                // alignItems="center"
                // justifyContent="center"
                // border="default"
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
                    {/* Tabs to change type of questions to display; Apply bg color conditionally per active tab */}
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
                    {/* List each Question component filtered by Unanswered/Answered */}
                    <ul>
                        {this.state.showQuestions === 'unansweredQuestions'
                            // Display content for Unanswered Questions tab
                            ? !Object.keys(hasNotVoted).length
                                ? // Display message for no Unanswered Questions
                                    <li>
                                        <Card
                                            alignItems="center"
                                            justifyContent="center"
                                            border="default"
                                            margin={16}
                                            padding={8}
                                            elevation={2}
                                        >
                                            <Paragraph
                                                size={500}
                                            >
                                                You answered all the questions!
                                            </Paragraph>
                                        </Card>
                                    </li>
                                : // Display Unanswered Questions
                                    hasNotVoted.map((id) =>
                                        <li key={id}>
                                            <Question id={id} />
                                        </li>
                                )
                            // Display content for Answered Questions tab
                            : !Object.keys(hasVoted).length
                                ? // Display message for no Answered Questions
                                    <li>
                                        <Card
                                            alignItems="center"
                                            justifyContent="center"
                                            border="default"
                                            margin={16}
                                            padding={8}
                                            elevation={2}
                                        >
                                            <Paragraph
                                                size={500}
                                            >
                                                You have not answered any questions yet!
                                            </Paragraph>
                                        </Card>
                                    </li>
                                : // Display Unanswered Questions
                                    hasVoted.map((id) =>
                                        <li key={id}>
                                            <Question id={id} />
                                        </li>
                            )
                        }
                    </ul>
                </Card>
            </Pane>
        )
    }
}

function mapStateToProps({ authedUser, questions }) {
    // console.log('***** Dashboard - questions', questions)

    return {
        authedUser,
        questions,
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)
