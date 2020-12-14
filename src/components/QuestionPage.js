import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Avatar, Button, Card, Heading, Pane, Paragraph } from 'evergreen-ui'

class QuestionPage extends Component {
    render() {
        console.log('*********** QuestionPage - this.props ***********', this.props)

        const { id, question, author, users, optionOneVotes, optionTwoVotes } = this.props
        const { avatarURL, name } = users[author]

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
                        <Card
                            alignItems="center"
                            justifyContent="center"
                            border="default"
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
                        <Card
                            alignItems="center"
                            justifyContent="center"
                            border="default"
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
                        <Button
                            appearance="primary"
                            marginTop={16}
                            height={40}
                            width={416}
                            justifyContent="center"
                        >
                            Submit Vote
                        </Button>
                </Pane>
            </Card>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { id } = props.match.params

    const question = questions[id]
    const author = question ? question["author"] : null

    const optionOneVotes = question.optionOne.votes
    const optionTwoVotes = question.optionTwo.votes

    // console.log('***** QuestionPage - question *****', question)
    // console.log('***** QuestionPage - question.id *****', question.id)
    // console.log('***** QuestionPage - author *****', author)

    // console.log('***** QuestionPage - authedUser *****', authedUser)
    // console.log('***** QuestionPage - userAuthed *****', users[authedUser])

    // console.log('***** QuestionPage - optionOneVotes *****', optionOneVotes)
    // console.log('***** QuestionPage - optionTwoVotes *****', optionTwoVotes)

    return {
        id,
        authedUser,
        users,
        question,
        author,
        optionOneVotes,
        optionTwoVotes
    }
}

export default connect(mapStateToProps)(QuestionPage)
