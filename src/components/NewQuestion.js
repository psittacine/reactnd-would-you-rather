import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSetQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import { Button, Card, Heading, Pane, TextInput } from 'evergreen-ui'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleChange = (e) => {

        // console.log('this.state: ', this.state) // {optionOne: "one", optionTwo: "two"}
        // console.log('e.target.name: ', e.target.name) // optionOne
        // console.log('e.target.value: ', e.target.value) // one

        const optionName = e.target.name
        const optionValue = e.target.value

        this.setState(() => ({
            ...this.state,
            [optionName]: optionValue
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOne, optionTwo } = this.state
        const { dispatch } = this.props

        // str.trim()
        dispatch(handleSetQuestion(optionOne.trim(), optionTwo.trim()))

        // console.log('NewQuestion - optionOne: ', optionOne)
        // console.log('NewQuestion - optionTwo: ', optionTwo)

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: true
        }))
    }

    render() {
        const { optionOne, optionTwo, toHome } = this.state

        // Redirect to / after submit
        if (toHome === true) {
            return <Redirect to='/' />
        }

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
                            className="bg-purple-200"
                            >
                            <Heading
                                size={700}
                                paddingX={8}
                                paddingY={16}
                                >
                                Add New Question
                            </Heading>
                        </Pane>
                    </div>
                    <Pane
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        marginY={16}
                        padding={8}
                        className="text-center"
                    >
                        <Heading
                            is="h3"
                            size={600}
                            marginBottom={16}
                        >
                            Would you rather...
                        </Heading>
                        <form
                            onSubmit={this.handleSubmit}
                        >
                            <TextInput
                                required
                                name="optionOne"
                                placeholder="Enter first option here"
                                value={optionOne}
                                onChange={this.handleChange}
                                maxLength={150}
                                display="block"
                                width={416}
                                height={42}
                            />
                            <Heading
                                is="h3"
                                size={600}
                                marginY={8}
                            >
                                ...or...
                            </Heading>
                            <TextInput
                                required
                                name="optionTwo"
                                placeholder="Enter second option here"
                                value={optionTwo}
                                onChange={this.handleChange}
                                maxLength={150}
                                display="block"
                                width={416}
                                height={42}
                            />
                            <Button
                                appearance="primary"
                                marginTop={16}
                                height={40}
                                width={416}
                                justifyContent="center"
                                type="submit"
                                disabled={optionOne.trim() === "" || optionTwo.trim() === ""}
                            >
                                Submit Question
                            </Button>
                        </form>
                    </Pane>
                </Card>
            </Pane>

        )
    }
}

export default connect()(NewQuestion)
