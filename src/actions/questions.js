import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { setUserAnswers, setUserQuestions } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER' // vote
export const SET_QUESTION = 'SET_QUESTION' // new question

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

function setQuestionAnswer ({ authedUser, qid, answer }) {
    return {
        type: SET_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleSetQuestionAnswer (info) {
    return (dispatch) => {
        dispatch(setQuestionAnswer(info))
        dispatch(setUserAnswers(info))

    return saveQuestionAnswer(info)
        .catch((e) => {
            console.warn('Error in handleSetQuestionAnswer: ', e)
            alert('There was an error answering the question. Try again.')
        })
    }
}

function setQuestion (question) {
    return {
        type: SET_QUESTION,
        question
    }
}

export function handleSetQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser,
        })
            .then((question) => {
                dispatch(setQuestion(question))
                dispatch(setUserQuestions({
                    authedUser,
                    question: question.id
                }))
            })
            .then(() => dispatch(hideLoading()))
    }
}
