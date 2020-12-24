import { GET_USERS, SET_USER_ANSWERS, SET_USER_QUESTIONS } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        case SET_USER_ANSWERS:
            // { authedUser, qid, answer }
            // users.authedUser.answers[qid: answer]
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case SET_USER_QUESTIONS:
            // { authedUser, question }
            // users.authedUser.questions[qid]
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.question])
                }
            }
        default:
            return state
    }
}
