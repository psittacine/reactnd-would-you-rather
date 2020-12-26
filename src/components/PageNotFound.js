import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, ErrorIcon, Heading, Pane } from 'evergreen-ui'

class PageNotFound extends Component {

    render() {
        // console.log('*********** PageNotFound - this.props ***********', this.props)

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
                                404:  Page Not Found
                            </Heading>
                        </Pane>
                    </div>
                </Card>
            </Pane>
        )
    }
}

export default connect()(PageNotFound)
