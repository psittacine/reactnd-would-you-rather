import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA.js'

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

export function saveQuestion(questionData) {
    return _saveQuestion(questionData)
}

export function saveQuestionAnswer(questionAnswerData) {
    return _saveQuestionAnswer(questionAnswerData)
}
