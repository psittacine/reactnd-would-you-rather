import React, { Component } from 'react'
import { Button, Card, Heading, Pane, TextInput } from 'evergreen-ui'

class NewQuestion extends Component {
    state = {
        // text: '',
        /*
        optionOne: {
            text: ''
        },
        optionTwo: {
            text: ''
        }
        */
        optionOne: '',
        optionTwo: ''
    }

    handleChange = (e) => {
        // const text = e.target.value

        console.log('this.state: ', this.state) // {optionOne: "one", optionTwo: "two"}
        // console.log('e.target.name: ', e.target.name) // optionOne
        // console.log('e.target.value: ', e.target.value) // one

        const optionName = e.target.name
        const optionValue = e.target.value

        this.setState(() => ({
            /*
            optionOne: {
                text: optionOneText
            },
            optionTwo: {
                text: optionTwoText
            }
             */
            ...this.state,
            [optionName]: optionValue
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        // const { text } = this.state

        const { optionOne, optionTwo } = this.state

        // TODO: Add Question to Store
        // str.trim()

        console.log('NewQuestion - optionOne: ', optionOne)
        console.log('NewQuestion - optionTwo: ', optionTwo)

        this.setState(() => ({
            // text: ''
            optionOne: '',
            optionTwo: ''
        }))
    }

    render() {
        const { optionOne, optionTwo } = this.state

        // TODO: Redirect to / if submitted

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

export default NewQuestion
