import { GET_QUESTIONS, SET_QUESTION_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SET_QUESTION_ANSWER :
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    // concat authedUser to chosen option
                    // questions[qid].optionOne.votes
                    // state[action.id].answer.votes.concat([action.authedUser])
                    optionOne: {
                        ...state[action.qid].optionOne,
                        votes: action.answer === 'optionOne'
                            ? state[action.qid].optionOne.votes.concat([action.authedUser])
                            : state[action.qid].optionOne.votes
                    },
                    optionTwo: {
                        ...state[action.qid].optionOne,
                        votes: action.answer === 'optionTwo'
                            ? state[action.qid].optionTwo.votes.concat([action.authedUser])
                            : state[action.qid].optionTwo.votes
                    }
                }
            }
        default:
            return state
    }
}
