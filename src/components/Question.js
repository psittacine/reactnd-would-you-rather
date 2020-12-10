import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {

    render() {

        console.log('*********** this.props ***********', this.props)

        const { question, author, users, userAuthed } = this.props

        if (question === null) {
            return <p>This Question does not exist.</p>
        }

        return (
            <div className='border-solid border-4 border-blue-400 m-2 p-2'>

                {/* TODO:  Remove this TEST info */}
                <div className='text-red-400'>
                    <p>[Question Component]</p>
                    <p className='mb-4'>Logged in as:
                        <span className='px-1'>
                            <img
                                src={userAuthed.avatarURL}
                                alt={`Avatar of ${userAuthed.name}`}
                                className='inline-block h-4 w-4'
                            />
                        </span>
                        {userAuthed.name}
                    </p>
                </div>
                {/* END - TEST info */}

                {/* Question and Author */}
                <h2>{users[author].name} asks:</h2>
                <img
                    src={users[author].avatarURL}
                    alt={`Avatar of ${users[author].name}`}
                    className=''
                />
                <h3>Would you rather...</h3>
                <p>A: {question.optionOne.text}</p>
                <p>B: {question.optionTwo.text}</p>

            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id]
    const author = question ? question["author"] : null

    console.log('***** question *****', question)
    console.log('***** author *****', author)

    return {
        authedUser,
        users,
        question,
        author,
        userAuthed: users[authedUser] /* TODO:  Remove userAuthed if not needed after testing */
    }
}

export default connect(mapStateToProps)(Question)
