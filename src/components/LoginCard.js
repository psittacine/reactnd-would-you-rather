import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import { Avatar, Card, Heading, Pane } from 'evergreen-ui'

class LoginCard extends Component {


    handleLoginSelection = () => {
        const { dispatch, id } = this.props
        dispatch(setAuthedUser(id))
    }


    render() {
        // console.log('*********** LoginCard - this.props ***********', this.props)

        const { user } = this.props
        const { avatarURL, name } = user


        return (
            <Card
                alignItems="center"
                justifyContent="center"
                border="default"
                margin={16}
                padding={8}
                elevation={2}
                className="cursor-pointer hover:bg-yellow-200"
                onClick={()=> this.handleLoginSelection()}
            >
                <Pane
                    display="flex"
                    alignItems="center"
                    width={440}
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
            </Card>
        )
    }
}

function mapStateToProps ({ users }, { id }) {
    const user = users[id]

    // console.log('***** LoginCard - user *****', user)
    // console.log('***** LoginCard - user.id *****', user.id)

    return {
        user
    }
}

export default connect(mapStateToProps)(LoginCard)
