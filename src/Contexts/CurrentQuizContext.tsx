import { createContext, useReducer } from "react";
import { Prop, CurrentQuiz, CurrentQuizContextType } from "./Context";
import { currentQuizReducer } from "../Reducers/currentQuizReducer";
import { useContext } from "react";

const CurrentQuizContext = createContext({} as CurrentQuizContextType);

export function CurrentQuizProvider({ children }: Prop) {

    const initialCurrentQuizState: CurrentQuiz = {
        currentQuiz: {
            _id: "",
            quizName: "",
            questions: [
                {
                    _id: "",
                    questionName: "",
                    options: [
                        {
                            _id: "",
                            answer: "",
                            isCorrect: false
                        }
                    ]
                }
            ],
        },
        questionCount: 0,
        currentQuestion: 0,
        answered: 0,
        notAnswered: 0,
        score: 0,
        timer: 0
    }
    const [currentQuizState, currentQuizDispatch] = useReducer(currentQuizReducer, initialCurrentQuizState)

    return (
        <CurrentQuizContext.Provider value={{ currentQuizState, currentQuizDispatch }}>
            {children}
        </CurrentQuizContext.Provider>
    )
}

export function useCurrentQuiz() {
    return useContext(CurrentQuizContext)
}