import { CurrentQuiz, CurrentQuizAction } from '../Contexts/Context';

export function currentQuizReducer(state: CurrentQuiz, action: CurrentQuizAction){
    switch (action.type) {
        case "LOAD":
            return { ...state, currentQuiz: action.payload, timer: 30, questionCount: action.payload.questions.length, currentQuestion: 0, score: 0, answered: 0, notAnswered: 0 }
        case "DECREMENT-TIMER":
            return { ...state, timer: state.timer - 1 }
        case "RESET-TIMER":
            return { ...state, timer: 30 }
        case "INCREMENT-QUESTION":
            return { ...state, currentQuestion: state.currentQuestion + 1 }
        case "UPDATE-SCORE":
            return { ...state, score: action.payload ? state.score + 10 : state.score - 3 }
        case "ANSWERED":
            return { ...state, answered: state.answered + 1 }
        case "NOT-ANSWERED":
            return { ...state, notAnswered: state.notAnswered + 1 }
        default:
            return { ...state }
    }
}