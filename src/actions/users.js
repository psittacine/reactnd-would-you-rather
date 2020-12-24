export const GET_USERS = 'GET_USERS'
export const SET_USER_ANSWERS = 'SET_USER_ANSWERS'
export const SET_USER_QUESTIONS = 'SET_USER_QUESTIONS'

export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}

export function setUserAnswers({ authedUser, qid, answer }) {
    return {
        type: SET_USER_ANSWERS,
        authedUser,
        qid,
        answer
    }
}

export function setUserQuestions({ authedUser, question }) {
    return {
        type: SET_USER_QUESTIONS,
        authedUser,
        question
    }
}
