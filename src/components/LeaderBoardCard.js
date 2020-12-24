import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Avatar, Card, Heading, Pane, Paragraph } from 'evergreen-ui'

class LeaderBoardCard extends Component {

    render() {
        console.log('*********** LeaderBoardCard - this.props ***********', this.props)

        const { user } = this.props
        const { avatarURL, name } = user

        const questionsAnswered = Object.keys(user.answers).length
        const questionsAsked = user.questions.length
        const score = questionsAnswered + questionsAsked

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
                        {name}
                    </Heading>
                </Pane>

                <Pane
                    margin={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Pane
                        className="flex text-center"
                        marginTop={16}
                    >
                        <Card
                            alignItems="center"
                            justifyContent="center"
                            border="default"
                            padding={8}
                            marginX={8}
                            width={266}
                        >
                            <Paragraph
                                size={500}
                            >
                                Answered Questions: <span
                                    className="font-black"
                                >
                                    {questionsAnswered}
                                </span>
                            </Paragraph>
                            <Paragraph
                                size={500}
                            >
                                Asked Questions: <span
                                    className="font-bold"
                                >
                                    {questionsAsked}
                                </span>
                            </Paragraph>
                        </Card>
                        <Card
                            alignItems="center"
                            justifyContent="center"
                            border="default"
                            padding={8}
                            marginX={8}
                            width={134}
                            background="yellowTint"
                        >
                            <Paragraph
                                size={500}
                            >
                                Score:
                            </Paragraph>
                            <Paragraph
                                size={500}
                            >
                                <span
                                    className="font-bold"
                                >
                                    {score}
                                </span>
                            </Paragraph>
                        </Card>
                    </Pane>
                </Pane>
            </Card>
        )
    }
}

function mapStateToProps ({ users }, { id }) {
    const user = users[id]

    // console.log('***** LeaderBoardCard - user *****', user)
    // console.log('***** LeaderBoardCard - user.id *****', user.id)

    return {
        user
    }
}

export default connect(mapStateToProps)(LeaderBoardCard)
