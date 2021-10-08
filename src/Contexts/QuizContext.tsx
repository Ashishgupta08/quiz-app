import React, { createContext, useContext, useReducer, useEffect } from "react";
import { Prop, QuizState, QuizContextType } from "./Context";
import { quizReducer } from "../Reducers/quizReducer";
import axios from "axios";
import { useAuth } from "./index";

const QuizContext = createContext({} as QuizContextType)

export function QuizContextProvider({ children } :Prop){

    const initialQuizState: QuizState = { quiz: [], leaderBoard: [] };
    const [quizState, quizDispatch] = useReducer(quizReducer, initialQuizState);
    const { authState } = useAuth();

    useEffect(()=>{
        (async function(){
            try {
                const [quiz, leaderboard] = await Promise.all([axios.get("https://quiz-app-backend.ashishgupta08.repl.co/quiz", { headers: { Authorization: authState.token } }), axios.get("https://quiz-app-backend.ashishgupta08.repl.co/leaderBoard", { headers: { Authorization: authState.token } })])
                quizDispatch({ type: "LOAD-QUIZ", payload: quiz.data.result })
                quizDispatch({ type: "LOAD-LEADERBOARD", payload: leaderboard.data.result })
            } catch (e) {
                console.log(e.message);
            }
        })()
    },[authState])

    return(
        <QuizContext.Provider value={{ quizState, quizDispatch }}>
            { children }
        </QuizContext.Provider>
    )
}

export function useQuiz(){
    return useContext(QuizContext)
}
