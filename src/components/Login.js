import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginCard from './LoginCard'
import { Card, Heading, Pane } from 'evergreen-ui'

class Login extends Component {

    render() {
        // console.log('*********** Login - this.props ***********', this.props)

        const { users } = this.props

        return (
            <Pane
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
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
                            className="bg-pink-200"
                            >
                            <Heading
                                size={700}
                                paddingX={8}
                                paddingY={16}
                                >
                                Log In
                            </Heading>
                        </Pane>
                    </div>
                    <ul>
                        {users.map((user) => (
                            <li key={user}>
                                <LoginCard id={user} />
                            </li>
                        ))}
                    </ul>
                </Card>
            </Pane>
        )
    }
}

function mapStateToProps ({ users }) {

    // console.log('***** Login - authedUser *****', authedUser)
    // console.log('***** Login - users *****', users)
    // console.log('***** Login - users[authedUser] *****', users[authedUser])
    // console.log('***** Login - users[authedUser].avatarURL *****', users[authedUser].avatarURL)
    // console.log('***** Login - users[authedUser].name *****', users[authedUser].name)

    return {
        users: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Login)
