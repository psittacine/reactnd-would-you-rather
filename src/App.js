import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import LoadingBar from 'react-redux-loading'
import Dashboard from './components/Dashboard'
import ErrorBoundary from './components/ErrorBoundary'
import LeaderBoard from './components/LeaderBoard'
import Login from './components/Login'
import Nav from './components/Nav'
import NewQuestion from './components/NewQuestion'
import PageNotFound from './components/PageNotFound'
import QuestionPage from './components/QuestionPage'
import { Pane } from 'evergreen-ui'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <ErrorBoundary>
          <LoadingBar />
          <div>
            {this.props.loading === true
              ? null
              : this.props.authedUser === 'anonymoususer'
                ? // prompt user to log in
                  <>
                    <Nav />
                    <Login />
                  </>
                : // logged in view
                  <>
                    <Nav />
                    <Pane
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Switch>
                        <Route path='/' exact component={Dashboard} />
                        <Route path='/questions/:id' component={QuestionPage} />
                        <Route path='/new' component={NewQuestion} />
                        <Route path='/leaderboard' component={LeaderBoard} />
                        <Route path='/404' component={PageNotFound} />
                        <Route path='*' component={PageNotFound} />
                      </Switch>
                    </Pane>
                  </>
            }
          </div>
        </ErrorBoundary>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App)
