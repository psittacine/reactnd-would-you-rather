import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSetQuestionAnswer } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import YourVoteBadge from './YourVoteBadge'
import { Avatar, Button, Card, Heading, Pane, Paragraph } from 'evergreen-ui'

class QuestionPage extends Component {

    handleVote = (questionOption) => {
        // console.log(`>>> Voted for ${questionOption}`)
        const { dispatch, authedUser, question } = this.props

        dispatch(handleSetQuestionAnswer({
            authedUser,
            qid: question.id,
            answer: questionOption
        }))
    }

    render() {
        // console.log('*********** QuestionPage - this.props ***********', this.props)

        const { authedUser, question, author, users, optionOneVotes, optionTwoVotes } = this.props

        if (!question) {
            return <Redirect to='/404' />
        }

        // If !qid, these error
        const { avatarURL, name } = users[author]

        const votedOptionOne = optionOneVotes.includes(authedUser)
        const votedOptionTwo = optionTwoVotes.includes(authedUser)
        const hasVoted = votedOptionOne || votedOptionTwo

        const optionOneVotesCount = optionOneVotes.length
        const optionTwoVotesCount = optionTwoVotes.length
        const totalVotesCount = optionOneVotesCount + optionTwoVotesCount
        const optionOneVotesPercent = ((optionOneVotesCount / totalVotesCount) * 100).toFixed(2)
        const optionTwoVotesPercent = ((optionTwoVotesCount / totalVotesCount) * 100).toFixed(2)

        return (
            <Card
                alignItems="center"
                justifyContent="center"
                border="default"
                margin={16}
                padding={8}
                elevation={2}
            >
                <Pane
                    display="flex"
                    alignItems="center"
                >
                    <Avatar
                        src={avatarURL}
                        name={name}
                        size={40}
                        marginRight={8}
                    />

                    <Heading
                        is="h2"
                        size={700}
                    >
                        {name} asks:
                    </Heading>
                </Pane>
                <Pane
                    margin={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Heading
                        is="h3"
                        size={600}
                        marginBottom={16}
                    >
                        Would you rather...
                    </Heading>
                    <div className="flex text-center">
                        {/* optionOne text */}
                        <Card
                            alignItems="center"
                            justifyContent="center"
                            borderTop
                            borderRight
                            borderBottom="default"
                            borderLeft
                            padding={8}
                            marginX={8}
                            width={200}
                        >
                            <Paragraph
                                size={500}
                            >
                                {question.optionOne.text}
                            </Paragraph>
                        </Card>
                        {/* optionTwo text */}
                        <Card
                            alignItems="center"
                            justifyContent="center"
                            borderTop
                            borderRight
                            borderBottom="default"
                            borderLeft
                            padding={8}
                            marginX={8}
                            width={200}
                        >
                            <Paragraph
                                size={500}
                            >
                                {question.optionTwo.text}
                            </Paragraph>
                        </Card>
                    </div>
                    <div className="flex text-center">
                        {/* optionOne vote/stats */}
                        <Card
                            alignItems="center"
                            justifyContent="center"
                            // borderTop="muted"
                            borderRight
                            borderBottom
                            borderLeft
                            padding={8}
                            marginX={8}
                            width={200}
                        >
                            {hasVoted === true
                                ? // Show vote STATS
                                <>
                                    <Paragraph>
                                        {optionOneVotesPercent}%
                                    </Paragraph>
                                    <Paragraph>
                                        {optionOneVotesCount} out of {totalVotesCount} votes
                                    </Paragraph>
                                    {votedOptionOne === true
                                        ? <YourVoteBadge />
                                        : null
                                    }
                                </>
                                : // Show vote BUTTON
                                <Button
                                    appearance="primary"
                                    justifyContent="center"
                                    onClick={() => this.handleVote('optionOne')}
                                >
                                    Submit Vote
                                </Button>
                            }
                        </Card>
                        {/* optionTwo vote/stats */}
                        <Card
                            alignItems="center"
                            justifyContent="center"
                            // borderTop="muted"
                            borderRight
                            borderBottom
                            borderLeft
                            padding={8}
                            marginX={8}
                            width={200}
                        >
                            {hasVoted === true
                                ? // Show vote STATS
                                <>
                                    <Paragraph>
                                        {optionTwoVotesPercent}%
                                    </Paragraph>
                                    <Paragraph>
                                        {optionTwoVotesCount} out of {totalVotesCount} votes
                                    </Paragraph>
                                    {votedOptionTwo === true
                                        ? <YourVoteBadge />
                                        : null
                                    }
                                </>
                                : // Show vote BUTTON
                                <Button
                                    appearance="primary"
                                    justifyContent="center"
                                    onClick={() => this.handleVote('optionTwo')}
                                >
                                    Submit Vote
                                </Button>
                            }
                        </Card>
                    </div>
                </Pane>
            </Card>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { id } = props.match.params

    const question = questions[id]
    const author = question ? question["author"] : null

    // If !qid, these error
    // const optionOneVotes = question.optionOne.votes
    // const optionTwoVotes = question.optionTwo.votes

    let optionOneVotes, optionTwoVotes

    if (question) {
        optionOneVotes = question.optionOne.votes
        optionTwoVotes = question.optionTwo.votes
    }

    // console.log('***** QuestionPage - question *****', question)
    // console.log('***** QuestionPage - question.id *****', question.id)
    // console.log('***** QuestionPage - author *****', author)

    // console.log('***** QuestionPage - authedUser *****', authedUser)
    // console.log('***** QuestionPage - userAuthed *****', users[authedUser])

    // console.log('***** QuestionPage - optionOneVotes *****', optionOneVotes)
    // console.log('***** QuestionPage - optionTwoVotes *****', optionTwoVotes)

    return {
        authedUser,
        users,
        question,
        author,
        optionOneVotes,
        optionTwoVotes
    }
}

export default connect(mapStateToProps)(QuestionPage)
