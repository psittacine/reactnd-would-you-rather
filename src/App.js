import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import LoadingBar from 'react-redux-loading'
import Dashboard from './components/Dashboard'
import QuestionPage from './components/QuestionPage'
import { Pane } from 'evergreen-ui'
import NewQuestion from './components/NewQuestion'
// import LeaderBoard from './components/LeaderBoard'
import Nav from './components/Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <>
          <LoadingBar />
          <div>
            {this.props.loading === true
              ? null
              : <div>
                  <Nav />
                  <Pane
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/questions/:id' component={QuestionPage} />
                    <Route path='/new' component={NewQuestion} />
                    {/* <Route path='/leaderboard' component={LeaderBoard} /> */}
                  </Pane>
                </div>
            }
          </div>
        </>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
