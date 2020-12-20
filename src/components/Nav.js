import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Avatar, Icon, LogOutIcon, Pane, Paragraph } from 'evergreen-ui'

class Nav extends Component {

    render() {
        console.log('*********** Nav - this.props ***********', this.props)

        const { authedUser, users } = this.props
        const { avatarURL, name } = users[authedUser]

        return (
            // Nav bar template adapted from Tailwind UI free sample components - https://tailwindui.com/
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block h-8 w-auto" src="react-redux-logos.svg" alt="React-Redux"></img>
                            </div>
                            <div className="flex space-x-4 ml-6">
                                <NavLink to='/' exact activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Home
                                </NavLink>
                                <NavLink to='/new' activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    New Question
                                </NavLink>
                                <NavLink to='/leaderboard' activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Leader Board
                                </NavLink>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <Paragraph
                                color="white"
                            >
                                Welcome, {name}
                            </Paragraph>
                            <Avatar
                                src={avatarURL}
                                name={name}
                                size={32}
                                marginLeft={12}
                            />
                            <Pane
                                is="button"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                marginLeft={16}
                                onClick={()=> console.log('>>>> Clicked "Logout"')}
                            >
                                Logout
                                <Icon
                                    icon={LogOutIcon}
                                    size={12}
                                    marginLeft={8}
                                />
                            </Pane>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps ({ authedUser, users }) {

    // console.log('***** Nav - authedUser *****', authedUser)
    // console.log('***** Nav - users *****', users)
    // console.log('***** Nav - users[authedUser] *****', users[authedUser])
    // console.log('***** Nav - users[authedUser].avatarURL *****', users[authedUser].avatarURL)
    // console.log('***** Nav - users[authedUser].name *****', users[authedUser].name)

    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Nav)
