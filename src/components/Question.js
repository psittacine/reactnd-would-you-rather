import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar, Button, Card, Heading, Pane, Paragraph } from 'evergreen-ui'

class Question extends Component {

    render() {
        console.log('*********** Question - this.props ***********', this.props)
        // console.log('*** Question - this.state ***', this.state)

        const { question, author, users } = this.props
        const { avatarURL, name } = users[author]

        if (question === null) {
            return <p>This Question does not exist.</p>
        }

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
                            is={Link}
                            to={`/questions/${question.id}`}
                        >
                            View Poll
                        </Button>
                </Pane>
            </Card>
        )
    }
}

function mapStateToProps ({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    const author = question ? question["author"] : null

    console.log('***** Question - question *****', question)
    console.log('***** Question - question.id *****', question.id)
    console.log('***** Question - author *****', author)

    return {
        authedUser,
        users,
        question,
        author
    }
}

export default connect(mapStateToProps)(Question)
