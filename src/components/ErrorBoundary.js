import React, { Component } from "react"
import { connect } from 'react-redux'
import Nav from './Nav'
import { Card, Heading, Pane, ErrorIcon } from 'evergreen-ui'

// Implementation per REACT DOCS:  Error Boundaries -- https://reactjs.org/docs/error-boundaries.html

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = { error: null, errorInfo: null }
	}

	componentDidCatch(error, errorInfo) {
		// Catch errors in any components below and re-render with error message
		this.setState({
			error: error,
			errorInfo: errorInfo
		})
	}

	render() {
		if (this.state.errorInfo) {
			return (
				<>
                    <Nav />
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
                                    background="yellowTint"
                                >
                                    <Heading
                                        size={700}
                                        paddingX={8}
                                        paddingY={16}
                                    >
                                        <ErrorIcon
                                            display="inline"
                                            color="danger"
                                            marginRight={16}
                                            size={24}
                                        />
                                        Error:  Something went wrong
                                    </Heading>
                                </Pane>
                            </div>
                            <Pane
                                width={600}
                                padding={16}
                            >
                                <details style={{ whiteSpace: "pre-wrap" }}>
                                    {this.state.error && this.state.error.toString()}
                                    <br />
                                    {this.state.errorInfo.componentStack}
                                </details>
                            </Pane>
                        </Card>
                    </Pane>
				</>
			)
		}
		return this.props.children
	}
}

export default connect()(ErrorBoundary)
