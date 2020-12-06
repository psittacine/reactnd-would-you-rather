import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3 className='font-bold text-3xl p-4 text-center'>Home Page - Questions Dashboard</h3>
                <ul>
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                            <div>QUESTION ID: {id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)
