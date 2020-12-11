import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Pane, Card } from 'evergreen-ui'

class Dashboard extends Component {
    render() {
        console.log(this.props)
        return (
            <Pane
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="default"
            >
                <Card
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="default"
                    margin={24}
                    elevation={4}
                >
                    <ul>
                        {this.props.questionIds.map((id) => (
                            <li key={id}>
                                <Question id={id}/>
                            </li>
                        ))}
                    </ul>
                </Card>
            </Pane>
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
