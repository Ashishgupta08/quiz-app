import { QuizState, QuizAction } from "../Contexts/Context";

export function quizReducer(state: QuizState, action: QuizAction){
    switch (action.type) {
        case "LOAD-QUIZ":
            return { ...state, quiz: action.payload }
        case "LOAD-LEADERBOARD":
            return { ...state, leaderBoard: action.payload }
        default:
            return { ...state }
    }
}