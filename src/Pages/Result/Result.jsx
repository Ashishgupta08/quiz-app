import React from 'react'
import { useEffect } from 'react';
import { Nav } from '../../Components/index';
import { useCurrentQuiz, useAuth, useUser, useQuiz } from '../../Contexts';
import axios from 'axios';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';

export function Result() {

    const { currentQuizState } = useCurrentQuiz();
    const { quizDispatch } = useQuiz();
    const { authState } = useAuth();
    const { userState: { user }, userDispatch } = useUser();

    useEffect(() => {
        (async function () {
            try {
                await Promise.all([axios.patch("https://quiz-app-backend.ashishgupta08.repl.co/user/updateScore", { score: { quizId: currentQuizState.currentQuiz._id, score: currentQuizState.score } }, { headers: { Authorization: authState.token } }),
                axios.post("https://quiz-app-backend.ashishgupta08.repl.co/leaderBoard", { quizId: currentQuizState.currentQuiz._id, leaderBoard: { userId: user._id, score: currentQuizState.score } }, { headers: { Authorization: authState.token } })
                ])
                const [leaderBoard, userData] = await Promise.all([axios.get("https://quiz-app-backend.ashishgupta08.repl.co/leaderBoard", { headers: { Authorization: authState.token } }),
                axios.get("https://quiz-app-backend.ashishgupta08.repl.co/user/getUserData", { headers: { Authorization: authState.token } })
                ])
                quizDispatch({ type: "LOAD-LEADERBOARD", payload: leaderBoard.data.result })
                userDispatch({ type: "LOAD", payload: userData.data.result })
            } catch (e) {
                return store.addNotification({
                    title: 'Umable to update the score.',
                    message: e.message,
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: false
                    }
                });
            }
        }())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Nav />
            <div className="result padding-nav pb-16 md:pb-0">
                <div className="p-8 pb-6 mx-auto  flex flex-col md:pt-16 md:justify-center md:items-center">
                    <p className="font-bold self-center text-4xl">{currentQuizState.currentQuiz.quizName}</p>
                    <p className="font-medium text-xl my-4">Total Score - {currentQuizState.score}</p>
                    <p className="font-medium text-xl my-4">Answered - {currentQuizState.answered}</p>
                    <p className="font-medium text-xl my-4">Not Answered - {currentQuizState.notAnswered}</p>
                </div>
                <div>
                    {
                        currentQuizState.currentQuiz.questions.map(
                            que => {
                                return (
                                    <div className="answer-box py-4 px-4 my-4 mx-2 rounded-3xl shadow" key={que._id}>
                                        <p className="m-4">
                                            {que.questionName}
                                        </p>
                                        {
                                            que.options.map(
                                                option => {
                                                    return (
                                                        option.isCorrect ?
                                                            <button
                                                                className="answer bg-green-500 py-2 px-6 m-4 w-72 text-left rounded-xl text-lg font-semibold focus:outline-none focus:ring-2"
                                                                key={option._id}
                                                            >
                                                                {option.answer}
                                                            </button>
                                                            :
                                                            <button
                                                                className="answer bg-red-500 py-2 px-6 m-4 w-72 text-left rounded-xl text-lg font-semibold focus:outline-none focus:ring-2"
                                                                key={option._id}
                                                            >
                                                                {option.answer}
                                                            </button>
                                                    )
                                                }
                                            )
                                        }
                                    </div>
                                )
                            }
                        )
                    }
                </div>

            </div>
        </>
    )
}
