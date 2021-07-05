import React from "react"

export type Prop = {
    children: React.ReactNode;
}


export type AuthType = {
    isUserLoggedIn: boolean;
    token: string | null;
}
export type AuthContextType = {
    authState: AuthType
    authDispatch: React.Dispatch;
}
export type AuthAction = { type: "LOGIN", payload: string } | { type: "LOGOUT", payload: string }



export type Options = {
    "_id": string;
    "answer": string;
    "isCorrect": boolean;
}
export type Questions = {
    "_id": string;
    "questionName": string;
    "options": Options[];
}
export type Quiz = [
    {
        "_id": string;
        "quizName": string;
        "questions": Questions[];
    }
]
export type LeaderBoard = [
    {
        "_id": string;
        "quizId": {
            "_id": string;
            "quizName": string;
        }
        "leaderBoard": [
            {
                "_id": string;
                "userId": {
                    "_id": string;
                    "name": string;
                }
                "score": number;
            }
        ]
    }
]
export type QuizState = {
    "quiz": Quiz[] | {};
    "leaderBoard": LeaderBoard[] | {};
}
export type QuizContextType = { quizState: QuizState; quizDispatch: React.Dispatch }
export type QuizAction = { type: "LOAD-QUIZ", payload: Quiz } | { type: "LOAD-LEADERBOARD", payload: LeaderBoard }


export type UserScore = [
    {
        "_id": string;
        "quizId": {
            "_id": string;
            "quizName": string;
        };
        "score": number;
    }
]
export type User = {
    "_id": string;
    "username": string;
    "password": string;
    "name": string;
    "email": string;
    "gender": string;
    "score": UserScore[];
}
export type UserState = {
    "user": User | {};
}
export type UserContextType = { userState: userState; userDispatch: React.Dispatch }
export type UserAction = { type: "LOAD", payload: User }


export type CurrentQuiz = {
    "currentQuiz": {
        "_id": string;
        "quizName": string;
        "questions": Questions[];
    };
    "questionCount": number;
    "currentQuestion": number;
    "answered": number;
    "notAnswered": number;
    "score": number;
    "timer": number;
}
export type CurrentQuizContextType = { currentQuizState: CurrentQuiz, currentQuizDispatch: React.Dispatch }
export type CurrentQuizAction = { type: "LOAD", payload: currentQuiz } |
                                { type: "DECREMENT-TIMER" } |
                                { type: "RESET-TIMER" } |
                                { type: "INCREMENT-QUESTION" } |
                                { type: "UPDATE-SCORE" , payload: boolean } |
                                { type: "ANSWERED" } |
                                { type: "NOT-ANSWERED" }