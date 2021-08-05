import React from 'react'
import './question.css'
import { MdTimer } from 'react-icons/md';
import { useCurrentQuiz } from '../../Contexts'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Question() {

    const navigate = useNavigate();
    const { currentQuizState, currentQuizDispatch } = useCurrentQuiz();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentQuizState.timer > 0) {
                currentQuizDispatch({ type: "DECREMENT-TIMER" })
            } else if (currentQuizState.timer === 0) {
                currentQuizDispatch({ type: "NOT-ANSWERED" })
                if (currentQuizState.currentQuestion + 1 === currentQuizState.questionCount) {
                    return navigate('/result');
                }
                currentQuizDispatch({ type: "RESET-TIMER" })
                currentQuizDispatch({ type: "INCREMENT-QUESTION" })
            }
            return
        }, 1000);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentQuizState.timer])


    function answerHandler(data) {
        data
            ? currentQuizDispatch({ type: "UPDATE-SCORE", payload: true })
            : currentQuizDispatch({ type: "UPDATE-SCORE", payload: false })
        currentQuizDispatch({ type: "ANSWERED" })
        if (currentQuizState.currentQuestion + 1 === currentQuizState.questionCount) {
            return navigate('/result');
        }
        currentQuizDispatch({ type: "RESET-TIMER" })
        currentQuizDispatch({ type: "INCREMENT-QUESTION" })
    }

    return (
        <div className="text-center my-6 question">
            <div className="flex flex-row justify-between mt-8 mb-2 mx-6 font-semibold text-xl">
                <p>Question - {currentQuizState.currentQuestion + 1}/{currentQuizState.questionCount}</p>
                <p className=""> <MdTimer className="inline align-middle h-6 w-6" /> 00:{currentQuizState.timer} </p>
            </div>
            <div className="box-home py-4 px-4 my-4 mx-2 rounded-3xl">
                <p className="m-4">
                    {currentQuizState.currentQuiz.questions[currentQuizState.currentQuestion].questionName}
                </p>
                <button
                    className="option-btn py-2 px-6 m-4 w-72 text-left border rounded-xl text-lg font-semibold focus:outline-none focus:ring-2"
                    onClick={() => { answerHandler(currentQuizState.currentQuiz.questions[currentQuizState.currentQuestion].options[0].isCorrect) }}
                >
                    {currentQuizState.currentQuiz.questions[currentQuizState.currentQuestion].options[0].answer}
                </button>
                <button
                    className="option-btn py-2 px-6 m-4 w-72 text-left border rounded-xl text-lg font-semibold focus:outline-none focus:ring-2"
                    onClick={() => { answerHandler(currentQuizState.currentQuiz.questions[currentQuizState.currentQuestion].options[1].isCorrect) }}
                >
                    {currentQuizState.currentQuiz.questions[currentQuizState.currentQuestion].options[1].answer}
                </button>
                <button
                    className="option-btn py-2 px-6 m-4 w-72 text-left border rounded-xl text-lg font-semibold focus:outline-none focus:ring-2"
                    onClick={() => { answerHandler(currentQuizState.currentQuiz.questions[currentQuizState.currentQuestion].options[2].isCorrect) }}
                >
                    {currentQuizState.currentQuiz.questions[currentQuizState.currentQuestion].options[2].answer}
                </button>
                <button
                    className="option-btn py-2 px-6 m-4 w-72 text-left border rounded-xl text-lg font-semibold focus:outline-none focus:ring-2"
                    onClick={() => { answerHandler(currentQuizState.currentQuiz.questions[currentQuizState.currentQuestion].options[3].isCorrect) }}
                >
                    {currentQuizState.currentQuiz.questions[currentQuizState.currentQuestion].options[3].answer}
                </button>
            </div>
            <div className="text-right mx-4">
                <button
                    className="primary-btn border rounded-xl px-4 py-2 w-32 text-lg font-bold focus:outline-none"
                    onClick={() => {
                        currentQuizDispatch({ type: "NOT-ANSWERED" })
                        if (currentQuizState.currentQuestion + 1 === currentQuizState.questionCount) {
                            return navigate('/result');
                        }
                        currentQuizDispatch({ type: "RESET-TIMER" })
                        currentQuizDispatch({ type: "INCREMENT-QUESTION" })
                    }}
                >
                    Skip
                </button>
            </div>
        </div>
    )
}
