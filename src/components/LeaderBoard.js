import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardCard from './LeaderBoardCard'
import { Card, Heading, Pane } from 'evergreen-ui'

class LeaderBoard extends Component {

    render() {
        // console.log('*********** LeaderBoard - this.props ***********', this.props)

        const { users } = this.props

        return (
            <Pane>
                <Card
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="default"
                    margin={72}
                    elevation={4}
                    flexDirection="column"
                >
                    <div className="flex text-center">
                        <Pane
                            alignItems="center"
                            justifyContent="center"
                            border="default"
                            width={600}
                            className="bg-yellow-200"
                            >
                            <Heading
                                size={700}
                                paddingX={8}
                                paddingY={16}
                                >
                                Leader Board
                            </Heading>
                        </Pane>
                    </div>
                    <ul>
                        {users.map((user) => (
                            <li key={user}>
                                <LeaderBoardCard id={user} />
                            </li>
                        ))}
                    </ul>
                </Card>
            </Pane>
        )
    }
}

function mapStateToProps({ users }) {
    // console.log('***** LeaderBoard - users', users)

    // Sort by {# of answers} + [# of questions]

    return {
        users: Object.keys(users)
            .sort( (a, b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length) )
    }
}

export default connect(mapStateToProps)(LeaderBoard)
