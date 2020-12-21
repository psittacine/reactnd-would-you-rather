import { saveQuestionAnswer } from '../utils/api'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER'

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

    return saveQuestionAnswer(info)
        .catch((e) => {
            console.warn('Error in handleSetQuestionAnswer: ', e)
            alert('There was an error answering the question. Try again.')
        })
    }
}
